/* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';

// Handler function for API requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Call all crawler functions
      crawl();
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

const crawl = () => {
  console.log('crawling...');
};
