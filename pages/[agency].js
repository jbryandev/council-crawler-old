import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { getAgency, getAllAgencies, getAllAgencyAgendas } from '@/lib/api';

export default function Agency({ agency, agendas }) {
  const router = useRouter();
  if (!router.isFallback && !agency?.slug) {
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
            <ul>
              {agendas.map((agenda) => (
                <li className='list-disc list-inside' key={agenda.id}>
                  <Link href={`/${agency.slug}/${agenda.date}`}>
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

export async function getStaticProps({ params }) {
  const agency = await getAgency(params.slug);
  const agendas = (await getAllAgencyAgendas(agency.id)) || [];
  return {
    props: {
      agency,
      agendas,
    },
  };
}

export async function getStaticPaths() {
  const allAgencies = await getAllAgencies();
  return {
    paths: allAgencies?.map((agency) => `/${agency.slug}`) || [],
    fallback: true,
  };
}
