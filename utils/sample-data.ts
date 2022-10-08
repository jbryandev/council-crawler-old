import { Agency, Agenda } from '@/lib/types';

/** Dummy agency data. */
export const sampleAgencyData: Agency[] = [
  {
    name: 'Broken Arrow Municipal Authority',
    id: '23298227',
    slug: 'bama',
  },
  {
    name: 'Edmond Public Works Committee',
    id: '23298229',
    slug: 'edmond',
  },
  {
    name: 'Oklahoma City Water Utilities Trust',
    id: '23298232',
    slug: 'ocwut',
  },
];

/** Dummy agenda data. */
export const sampleAgendaData: Agenda[] = [
  {
    date: '2022-09-13',
    id: '23800208',
    url: 'https://okc.primegov.com/Portal/Meeting?meetingTemplateId=49281',
    agency: {
      slug: 'ocwut',
    },
  },
  {
    date: '2022-09-06',
    id: '23798433',
    url: 'https://brokenarrow.legistar.com/MeetingDetail.aspx?ID=909662&GUID=F51CFDC3-4013-4131-9D0F-10847A5BB3D0&Options=&Search=',
    agency: {
      slug: 'bama',
    },
  },
  {
    date: '2022-09-20',
    id: '23798429',
    url: 'https://brokenarrow.legistar.com/MeetingDetail.aspx?ID=909665&GUID=166A0A4E-E847-4B8B-B45C-AD79A78B20AC&Options=&Search=',
    agency: {
      slug: 'bama',
    },
  },
  {
    date: '2022-09-14',
    id: '23798426',
    url: 'https://agenda.edmondok.com:8086/agenda_publish.cfm?id=&mt=ALL&get_month=9&get_year=2022&dsp=ag&seq=21059',
    agency: {
      slug: 'edmond',
    },
  },
  {
    date: '2022-09-28',
    id: '23798421',
    url: 'https://agenda.edmondok.com:8086/agenda_publish.cfm?id=&mt=ALL&get_month=9&get_year=2022&dsp=ag&seq=21060',
    agency: {
      slug: 'edmond',
    },
  },
  {
    date: '2022-09-27',
    id: '23298233',
    url: 'https://okc.primegov.com/Portal/Meeting?meetingTemplateId=49288',
    agency: {
      slug: 'ocwut',
    },
  },
];
