/* eslint-disable  @typescript-eslint/no-explicit-any */
import { GraphQLClient } from 'graphql-request';
import { Agency, Agenda } from '@/lib/types';
import {
  allAgenciesQuery,
  allAgendasQuery,
  allAgencyAgendasQuery,
  getAgencyQuery,
  getAgendaQuery,
} from '@/lib/graphql';

type Props = {
  query: string;
  variables?: any;
};

export const request = ({ query, variables }: Props) => {
  const client = new GraphQLClient(`https://graphql.datocms.com/`, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
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

export const getAgency = async (slug: string): Promise<Agency> => {
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
  agency_id: string
): Promise<Agenda[]> => {
  const data = await request({
    query: allAgencyAgendasQuery,
    variables: { agency_id: agency_id },
  });
  return data?.allAgendas;
};

export const getAgenda = async (
  agency_id: string,
  date: string
): Promise<Agenda> => {
  const data = await request({
    query: getAgendaQuery,
    variables: { agency_id: agency_id, date: date },
  });
  return data?.agenda;
};
