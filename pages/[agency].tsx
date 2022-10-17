/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { Agency, Agenda } from '@/lib/types';
import {
  getAgencyFromSlug,
  getAllAgencies,
  getAllAgencyAgendas,
} from '@/lib/datocms';
import { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  agency: Agency;
  agendas: Agenda[];
  errors: string;
};

export default function AgencyIndex({ agency, agendas, errors }: Props) {
  const router = useRouter();

  if ((!router.isFallback && !agency.slug) || errors) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <Head>
              <title>{agency.name} | Council Crawler</title>
            </Head>
            <Header>
              <Link href='/'>
                <a className='hover:underline'>Council Crawler</a>
              </Link>
            </Header>
            <PageTitle>{agency.name}</PageTitle>
            <ul className='text-center md:text-left'>
              {agendas.map((agenda) => (
                <li className='list-disc list-inside' key={agenda.id}>
                  <Link
                    href={`/${encodeURIComponent(
                      agency?.slug
                    )}/${encodeURIComponent(agenda.date)}`}
                  >
                    <a className='underline hover:text-success duration-200 transition-colors'>
                      {agenda.date}
                    </a>
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
  // Get the paths we want to pre-render based on agencies
  const agencies = await getAllAgencies();
  const paths = agencies.map((agency: Agency) => ({
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
    const agendas = await getAllAgencyAgendas(agency);

    return {
      props: {
        agency,
        agendas,
      },
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
