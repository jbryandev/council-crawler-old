import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Agency from '@/models/agency.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const agencies = await Agency.find({});
        res.status(200).json({ success: true, data: agencies });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const agency = await Agency.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: agency });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
