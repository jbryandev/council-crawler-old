import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Intro from '@/components/intro';
import { GetStaticProps } from 'next';
import { IAgency } from '@/models/agency.model';
import { getAllAgencies } from '@/utils/mongodb';

type Props = {
  agencies: IAgency[];
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
              {agencies &&
                agencies.map((agency) => (
                  <li className='list-disc list-inside' key={agency._id}>
                    <Link
                      href={`/${encodeURIComponent(agency.slug)}`}
                      className='underline hover:text-success duration-200 transition-colors'
                    >
                      {agency.name}
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
  const agencies = await getAllAgencies();
  return {
    props: { agencies },
  };
};
