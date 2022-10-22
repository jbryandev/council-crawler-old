/* eslint-disable  @typescript-eslint/no-explicit-any */
import { buildClient, LogLevel } from '@datocms/cma-client-node';
import { GraphQLClient } from 'graphql-request';
import { Agency, Agenda } from '@/lib/types';
import {
  allAgenciesQuery,
  allAgendasQuery,
  allAgencyAgendasQuery,
  getAgencyQuery,
  getAgendaQuery,
} from '@/lib/graphql';

/*

DATOCMS CONTENT DELIVERY API
(for retrieval-only operations)

*/
type Props = {
  query: string;
  variables?: any;
};

export const request = ({ query, variables }: Props) => {
  const client = new GraphQLClient(`https://graphql.datocms.com/`, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN_READONLY}`,
    },
  });
  return client.request(query, variables);
};

export const getAllAgencies = async (): Promise<Agency[]> => {
  const data = await request({
    query: allAgenciesQuery,
  });
  return data?.allAgencies;
};

export const getAgencyFromSlug = async (slug: string): Promise<Agency> => {
  const data = await request({
    query: getAgencyQuery,
    variables: { slug },
  });
  return data?.agency;
};

export const getAllAgendas = async (): Promise<Agenda[]> => {
  const data = await request({
    query: allAgendasQuery,
  });
  return data.allAgendas;
};

export const getAllAgencyAgendas = async (
  agency: Agency
): Promise<Agenda[]> => {
  const data = await request({
    query: allAgencyAgendasQuery,
    variables: { agency_id: agency.id },
  });
  return data?.allAgendas;
};

export const getAgenda = async (
  agency: Agency,
  date: string
): Promise<Agenda> => {
  const data = await request({
    query: getAgendaQuery,
    variables: { agency_id: agency.id, date: date },
  });
  return data?.agenda;
};

/*

DATOCMS CONTENT MANAGEMENT API
(for add/update/delete operations)

*/
const client = buildClient({
  // Full access API token needed for read/write
  apiToken: `${process.env.DATOCMS_API_TOKEN_FULLACCESS}`,
  logLevel: LogLevel.BASIC,
});

export const addAgenda = async (date: string, url: string, agency: Agency) => {
  try {
    const agenda = await client.items.create({
      item_type: { type: 'item_type', id: '305922' }, // ID for Agenda MODEL
      date: date,
      url: url,
      agency: agency.id,
    });
    return agenda;
  } catch (err: any) {
    return err.message;
  }
};

export const updateAgenda = async (agenda: Agenda, body: any) => {
  try {
    const updatedAgenda = await client.items.update(agenda.id, body);
    return updatedAgenda;
  } catch (err: any) {
    return err.message;
  }
};

export const deleteAgenda = async (agenda: Agenda) => {
  try {
    const deletedAgenda = await client.items.destroy(agenda.id);
    return deletedAgenda;
  } catch (err: any) {
    return err.message;
  }
};
