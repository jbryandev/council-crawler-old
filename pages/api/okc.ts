import { NextApiRequest, NextApiResponse } from 'next';
import { checkForNewAgendas } from '@/crawlers/okc';

// Handler function for API requests
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { slug } = req.query;
      checkForNewAgendas(slug as string);
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
