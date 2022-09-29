import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import Date from '@/components/date';
import { getAgency, getAgenda } from '@/lib/api';

export default function Agenda({ agency, agenda }) {
  const router = useRouter();
  if (!router.isFallback && !agenda?.date) {
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
              <title>
                {agenda.date} {agency.name} | Council Crawler
              </title>
            </Head>
            <Header>
              <Link href={`/${agency.slug}`}>
                <a className='hover:underline'>{agency.name}</a>
              </Link>
            </Header>
            <PageTitle>
              <Date dateString={agenda.date} />
            </PageTitle>
            <Link href={`${agenda.url}`}>
              <a className='underline hover:text-success duration-200 transition-colors'>
                {agenda.url}
              </a>
            </Link>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const agency = await getAgency(params.agency);
  const agenda = await getAgenda(agency.id, params.agenda);
  return {
    props: {
      agency,
      agenda,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
