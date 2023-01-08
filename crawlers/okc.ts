import Agency, { IAgency } from '@/models/agency.model';
import dbConnect from '@/utils/mongodb';
import axios from 'axios';
import { convert } from 'html-to-text';
import Meeting from '@/models/meeting.model';

type OKCCommittee = {
  id: string;
  name: string;
};

type OKCMeeting = {
  id: string;
  committeeId: string;
  date: Date;
  title: string;
  documentList: OKCDocument[];
};

type OKCDocument = {
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
const findCommittee = async (committees: OKCCommittee[], agency: IAgency) => {
  const committee = committees.find((c: OKCCommittee) => {
    return c.name === agency.name;
  });
  if (!committee) {
    throw `Could not find a matching committee for the given agency, ${agency.name}.`;
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
const findMeeting = async (meetings: OKCMeeting[], committee: OKCCommittee) => {
  const meeting = meetings.find((m: OKCMeeting) => {
    return m.committeeId === committee.id;
  });
  if (!meeting) {
    throw `Could not find any upcoming meetings for the given committee, ${committee.name}.`;
  }
  // Format the date coming from OKC API so that it is compatible with db format
  // meeting.date = new Date(meeting.date);

  return meeting;
};

// Checks that a given meeting doesn't already exist in the database
const doesMeetingExist = async (agenda: OKCDocument, agency: IAgency) => {
  const existingMeetings = await Meeting.find({ agency: agency });
  const alreadyExists = existingMeetings.find(
    (a: OKCDocument) => a.url == agenda.url
  );
  return Boolean(alreadyExists);
};

// Gets the agenda from the meeting document list
const getAgenda = async (meeting: OKCMeeting) => {
  const agenda = meeting.documentList.find((document: OKCDocument) => {
    return document.templateName === 'HTML Agenda';
  });
  if (!agenda) {
    throw 'Could not get an agenda for this meeting.';
  }
  agenda.url = `${agendaEndpoint}${agenda.templateId}`;
  return agenda;
};

// Gets the HTML version of an agenda using the OKC API
const getAgendaHTML = async (agenda: OKCDocument) => {
  const agendaHTML = await axios(`${agendaEndpoint}${agenda.templateId}`);
  if (!agendaHTML) {
    throw 'Could not get agenda HTML.';
  }
  return agendaHTML.data;
};

export const crawl = async (slug: string) => {
  try {
    await dbConnect();

    const agency = await Agency.findOne({ slug: slug });
    if (!agency) {
      throw `Could not find an Agency for the given slug, '${slug}'.`;
    }

    // Get list of committees and meetings for the agency
    const committees = await getCommittees();
    const meetings = await getMeetings();

    // Search through list of committees to find a match for given agency name
    const committee = await findCommittee(committees, agency);

    // Search through list of meetings to see if there is one for this committee
    const meeting = await findMeeting(meetings, committee);

    // Get agenda from meeting document list
    const agenda = await getAgenda(meeting);

    // Check meeting against database to make sure it doesn't already exist
    const exist = await doesMeetingExist(agenda, agency);
    if (exist) {
      throw 'Meeting already exists.';
    }

    // Extract agenda contents
    const agendaHTML = await getAgendaHTML(agenda);
    agenda.content = convert(agendaHTML, { wordwrap: 130 });
    if (!agenda.content) {
      throw 'Could not get agenda contents';
    }

    // Add meeting to database
    const newMeeting = new Meeting({
      agency: agency,
      name: meeting.title,
      date: meeting.date,
      url: agenda.url,
      agenda: agenda.content,
    });

    await newMeeting.save();

    return newMeeting;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
