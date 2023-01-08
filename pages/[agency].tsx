/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import Agency, { IAgency } from '@/models/agency.model';
import { GetStaticProps, GetStaticPaths } from 'next';
import Meeting, { IMeeting } from '@/models/meeting.model';
import dbConnect from '@/utils/mongodb';
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
                  <li
                    className='list-disc list-inside'
                    key={meeting._id.toString()}
                  >
                    <Link
                      href={`/${encodeURIComponent(
                        agency.slug
                      )}/${meeting._id.toString()}`}
                      className='underline hover:text-success duration-200 transition-colors'
                    >
                      {format(new Date(meeting.date), 'MMMM d, yyyy')}
                      {` - ${meeting.name}`}
                    </Link>
                  </li>
                ))}
            </ul>
            <section className='mt-10'>
              <Link
                href={`/meetings/fetch?agency=${agency.slug}`}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Fetch Meetings
              </Link>
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();

  const agencies = await Agency.find();

  const paths = agencies.map((agency) => ({
    params: { agency: agency.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();

  try {
    const slug = params?.agency as string;

    const agency = await Agency.findOne({ slug: slug }).lean();
    agency._id = agency._id.toString();
    if (!agency) {
      return { notFound: true };
    }

    const meetings = await Meeting.find({ agency: agency }).lean();
    meetings.map((meeting) => {
      meeting._id = meeting._id.toString();
      meeting.agency = meeting.agency.toString();
      meeting.date = meeting.date.toString();
    });

    return {
      props: {
        agency,
        meetings,
      },
    };
  } catch (error: any) {
    return { props: { errors: error.message } };
  }
};
