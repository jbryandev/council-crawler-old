import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Intro from '@/components/intro';
import { getAllAgencies } from '@/lib/api';

export default function Index({ allAgencies }) {
  const agencies = allAgencies;
  return (
    <>
      <Layout>
        <Head>
          <title>Council Crawler</title>
        </Head>
        <Container>
          <Intro />
          <section>
            <ul>
              {agencies.map((agency) => (
                <li className='list-disc list-inside' key={agency.id}>
                  <Link href={`/${encodeURIComponent(agency.slug)}`}>
                    <a className='underline hover:text-success duration-200 transition-colors'>
                      {agency.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allAgencies = (await getAllAgencies()) || [];
  return {
    props: { allAgencies },
  };
}
