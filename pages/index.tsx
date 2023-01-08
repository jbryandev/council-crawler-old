import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from '@/components/container';
import Intro from '@/components/intro';
import { GetStaticProps } from 'next';
import Agency, { IAgency } from '@/models/agency.model';
import dbConnect from '@/utils/mongodb';

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
                  <li
                    className='list-disc list-inside'
                    key={agency._id.toString()}
                  >
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
          <section className='mt-10'>
            <Link
              href={'/create'}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Create
            </Link>
          </section>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();

  const agencies = await Agency.find().lean();
  agencies.map((agency) => {
    agency._id = agency._id.toString();
  });

  return {
    props: { agencies },
  };
};
