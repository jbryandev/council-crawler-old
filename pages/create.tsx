import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import PageTitle from '@/components/page-title';
import Head from 'next/head';
import Link from 'next/link';

export default function CreateAgencyForm() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Agency | Council Crawler</title>
        </Head>
        <Container>
          <Header>
            <Link href='/' className='hover:underline'>
              Council Crawler
            </Link>
          </Header>
          <PageTitle>Create Agency</PageTitle>

          <form action='/api/agencies' method='post'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='name'
              name='name'
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold mt-2 mb-2'
              htmlFor='slug'
            >
              Slug
            </label>
            <input
              className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='slug'
              name='slug'
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold mt-2 mb-2'
              htmlFor='url'
            >
              URL
            </label>
            <input
              className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              id='url'
              name='url'
              required
            />
            <button
              className='block bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </form>
        </Container>
      </Layout>
    </>
  );
}
