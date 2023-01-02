/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { IAgency } from '@/models/agency.model';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getAgencyFromSlug,
  getAllAgencies,
  getAllAgencyMeetings,
} from '@/utils/mongodb';
import { IMeeting } from '@/models/meeting.model';
import { format } from 'date-fns';

type Props = {
  agency: IAgency;
  meetings: IMeeting[];
  errors: string;
};

export default function AgencyIndex({ agency, meetings, errors }: Props) {
  const router = useRouter();

  if ((!router.isFallback && !agency.slug) || errors) {
    return <ErrorPage statusCode={404} />;
  }

  const title = `${agency?.name} | Council Crawler`;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <Head>
              <title>{title}</title>
            </Head>
            <Header>
              <Link href='/' className='hover:underline'>
                Council Crawler
              </Link>
            </Header>
            <PageTitle>{agency.name}</PageTitle>
            <ul className='text-center md:text-left'>
              {meetings &&
                meetings.map((meeting) => (
                  <li className='list-disc list-inside' key={meeting._id}>
                    <Link
                      href={`/${encodeURIComponent(agency?.slug)}/${
                        meeting._id
                      }`}
                      className='underline hover:text-success duration-200 transition-colors'
                    >
                      {format(new Date(meeting.date), 'MMMM d, yyyy')}
                      {` - ${meeting.name}`}
                    </Link>
                  </li>
                ))}
            </ul>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const agencies = await getAllAgencies();
  const paths = agencies.map((agency) => ({
    params: { agency: agency.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.agency as string;
    const agency = await getAgencyFromSlug(slug);
    if (!agency) {
      return { notFound: true };
    }
    const meetings = await getAllAgencyMeetings(agency);

    return {
      props: {
        agency,
        meetings,
      },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
