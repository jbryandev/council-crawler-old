import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Meeting from '@/models/meeting.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const meetings = await Meeting.find({});
        res.status(200).json({ success: true, data: meetings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const meeting = await Meeting.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: meeting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
