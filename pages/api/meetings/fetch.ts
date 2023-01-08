import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import { crawl as OKCcrawl } from '@/crawlers/okc';

export async function crawl(slug: string) {
  if (slug == 'ocwut') {
    return await OKCcrawl(slug);
  } else {
    throw `No crawler function for the given slug, '${slug}'.`;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { slug },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const meetings = await crawl(slug as string);
        if (!meetings) {
          res
            .status(400)
            .json({ success: false, message: 'Error fetching new meetings.' });
        }
        res.status(201).json({ success: true, data: meetings });
      } catch (error: any) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
