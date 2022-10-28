/*

Rough Order of Operations:
1. Take slug param and get corresponding Agency name from CMS
2. Get committee list from OKC API and search for the agency name
3. If matched, get committee ID used by OKC API
4. Get upcoming meetings list from OKC API and search for committee ID
5. If matched, check that meeting doesn't already exist in database
6. Get agenda from meeting document list
7. Get template ID from agenda and use OKC API endpoint to get HTML for agenda
8. Parse HTML to get agenda content

*/
/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  Agency,
  Agenda,
  getAgencyFromSlug,
  getAllAgencyAgendas,
  addAgenda,
} from '@/lib/datocms';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { parse, format } from 'date-fns';

// Types
type Committee = {
  id: string;
  name: string;
};

type Meeting = {
  id: string;
  committeeId: string;
  date: string;
  documentList: Document[];
};

type Document = {
  id: string;
  templateId: string;
  templateName: string;
  url: string;
  content: string;
};

// External API endpoints from OKC agenda management system
const committeeEndpoint =
  'https://okc.primegov.com/api/committee/GetCommitteeesListByShowInPublicPortal';
const meetingsEndpoint =
  'https://okc.primegov.com/api/v2/PublicPortal/ListUpcomingMeetings?_=1664477923943';
const agendaEndpoint =
  'https://okc.primegov.com/Portal/Meeting?meetingTemplateId=';

// Handler function for API requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { slug } = req.query;
      const agency = await getAgencyFromSlug(String(slug));
      checkForNewAgendas(agency);
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// Gets list of committees from OKC API
const getCommittees = async () => {
  const committees = await axios(committeeEndpoint);
  if (!committees) {
    throw 'Could not get list of OKC Committees.';
  }
  return committees.data;
};

// Attempts to match a committee from the committee list with the given Agency
// This will relate the committee ID to the given Agency
const findCommittee = async (committees: Committee[], agency: Agency) => {
  const committee = committees.find((c: Committee) => {
    return c.name === agency.name;
  });
  if (!committee) {
    throw `Could not find a matching committee for the given agency ${agency.name}.`;
  }
  return committee;
};

// Gets list of upcoming meetings from OKC API
const getMeetings = async () => {
  const meetings = await axios(meetingsEndpoint);
  if (!meetings) {
    throw 'Could not get list of upcoming meetings.';
  }
  return meetings.data;
};

// Attempts to find the committee meeting in the list of upcoming meetings
// If not found, it most likely means that a meeting is not yet upcoming
const findMeeting = async (meetings: Meeting[], committee: Committee) => {
  const meeting = meetings.find((m: Meeting) => {
    return m.committeeId === committee.id;
  });
  if (!meeting) {
    throw `Could not find any upcoming meetings for the given committee ${committee.name}.`;
  }
  return meeting;
};

// Checks that a given meeting doesn't already exist in the database
const doesMeetingExist = async (meeting: Meeting, agency: Agency) => {
  const existingMeetings = await getAllAgencyAgendas(agency);
  const alreadyExists = existingMeetings.find((agenda: Agenda) => {
    agenda.date === meeting.date;
  });
  return Boolean(alreadyExists);
};

// Gets the agenda from the meeting document list
const getAgenda = async (meeting: Meeting) => {
  const agenda = meeting.documentList.find((document: Document) => {
    return document.templateName === 'HTML Agenda';
  });
  if (!agenda) {
    throw 'Could not get an agenda for this meeting.';
  }
  agenda.url = `${agendaEndpoint}${agenda.templateId}`;
  return agenda;
};

// Gets the HTML version of an agenda using the OKC API
const getAgendaHTML = async (agenda: Document) => {
  const agendaHTML = await axios(`${agendaEndpoint}${agenda.templateId}`);
  if (!agendaHTML) {
    throw 'Could not get agenda HTML.';
  }
  return agendaHTML.data;
};

// Main crawler function that checks whether any new agendas exist for a given OKC agency
const checkForNewAgendas = async (agency: Agency) => {
  try {
    // Get list of committees and meetings
    const committees = await getCommittees();
    const meetings = await getMeetings();

    // Search through list of committees to find a match for given agency name
    const committee = await findCommittee(committees, agency);

    // Search through list of meetings to see if there is one for this committee
    const meeting = await findMeeting(meetings, committee);

    // Check meeting against database to make sure it doesn't already exist
    const exist = await doesMeetingExist(meeting, agency);
    if (exist) {
      throw 'Meeting already exists.';
    }
    // Get agenda from meeting document list
    const agenda = await getAgenda(meeting);

    // Extract agenda contents
    const agendaHTML = await getAgendaHTML(agenda);
    const $ = cheerio.load(agendaHTML);
    agenda.content = $('div#MeetingContents').text();
    if (!agenda.content) {
      throw 'Could not get agenda contents';
    }

    // Add agenda to database
    const date = format(
      parse(meeting.date, 'MMM dd, yyyy', new Date()),
      'yyyy-MM-dd'
    );
    addAgenda(agency, date, agenda.url, agenda.content);
  } catch (error: any) {
    console.log(error);
  }
};
