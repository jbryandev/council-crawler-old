import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import Date from '@/components/date';
import {
  Agency,
  Agenda,
  getAgenda,
  getAgencyFromSlug,
  getAllAgendas,
} from '@/lib/datocms';
import { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  agency: Agency;
  agenda: Agenda;
  errors: string;
};

export default function AgendaIndex({ agency, agenda, errors }: Props) {
  const router = useRouter();

  if ((!router.isFallback && !agenda) || errors) {
    return <ErrorPage statusCode={404} />;
  }

  const title = `${agenda?.date} ${agency?.name} | Council Crawler`;

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
              <Date dateString={agenda.date} />
            </PageTitle>
            <div className='text-center md:text-left'>
              <Link
                href={`${agenda.url}`}
                className='text-center md:text-left underline hover:text-success duration-200 transition-colors'
                target='_blank'
              >
                Agenda Link
              </Link>
            </div>
            <pre className='mt-6 max-w-2xl'>{agenda.content}</pre>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const agendas = await getAllAgendas();
  const paths = agendas.map((agenda: Agenda) => ({
    params: { agency: agenda.agency.slug, agenda: agenda.date },
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
    const date = params?.agenda as string;
    const agenda = await getAgenda(agency, date);
    if (!agenda) {
      return { notFound: true };
    }

    return {
      props: {
        agency,
        agenda,
      },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
