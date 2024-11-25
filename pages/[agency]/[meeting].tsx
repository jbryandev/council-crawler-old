import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { GetStaticProps, GetStaticPaths } from 'next';
import Agency, { IAgency } from '@/models/agency.model';
import Meeting, { IMeeting } from '@/models/meeting.model';
import { format } from 'date-fns';
import dbConnect from '@/utils/mongodb';

type Props = {
  agency: IAgency;
  meeting: IMeeting;
  errors: string;
};

export default function MeetingIndex({ agency, meeting, errors }: Props) {
  const router = useRouter();
  if ((!router.isFallback && !meeting) || errors) {
    return <ErrorPage statusCode={404} />;
  }
  const titleDate = format(new Date(meeting.date), 'M/d/yy');
  const title = `${titleDate} - ${agency?.name}`;
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
              <Link
                href={`/${encodeURIComponent(agency.slug)}`}
                className='hover:underline'
              >
                {agency.name}
              </Link>
            </Header>
            <PageTitle>
              {format(new Date(meeting.date), 'MMMM d, yyyy')}
            </PageTitle>
            {meeting.url && (
              <div className='text-center md:text-left'>
                <Link
                  href={`${meeting.url}`}
                  className='text-center md:text-left underline hover:text-success duration-200 transition-colors'
                  target='_blank'
                >
                  Agenda Link
                </Link>
              </div>
            )}
            <pre className='mt-6 max-w-2xl'>{meeting.agenda}</pre>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();

  const meetings: IMeeting[] = await Meeting.find();

  const paths = await Promise.all(
    meetings.map(async (meeting) => {
      const agency = await Agency.findById(meeting.agency);
      return {
        params: { agency: agency.slug, meeting: meeting._id.toString() },
      };
    })
  );

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    await dbConnect();

    const slug = params?.agency as string;

    const agency = await Agency.findOne({ slug: slug }).lean();
    agency._id = agency._id.toString();
    if (!agency) {
      return { notFound: true };
    }

    const id = params?.meeting as string;

    const meeting = await Meeting.findById(id).lean();
    meeting._id = meeting._id.toString();
    meeting.date = meeting.date.toString();
    meeting.agency = meeting.agency.toString();
    if (!meeting) {
      return { notFound: true };
    }
    return {
      props: {
        agency,
        meeting,
      },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
