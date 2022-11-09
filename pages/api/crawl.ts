import { NextApiRequest, NextApiResponse } from 'next';
import { checkForNewAgendas as OKC_crawl } from '@/crawlers/okc';

// Handler function for API requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;
      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        // Call all crawler functions
        crawl();
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ succes: false });
      }
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

const crawl = async () => {
  console.log('Crawling...');
  await OKC_crawl('ocwut');
};
