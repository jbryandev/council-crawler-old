import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Intro from '@/components/intro';
// import { getAllAgencies } from '@/lib/api';
import { GetStaticProps } from 'next';
import { Agency } from '@/interfaces';
import { sampleAgencyData } from '@/utils/sample-data';

type Props = {
  agencies: Agency[];
};

export default function Index({ agencies }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Council Crawler</title>
        </Head>
        <Container>
          <Intro />
          <section className='flex-col md:flex-row flex items-center md:justify-between'>
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

export const getStaticProps: GetStaticProps = async () => {
  // const allAgencies = (await getAllAgencies()) || [];
  const agencies: Agency[] = sampleAgencyData;
  return {
    props: { agencies },
  };
};
