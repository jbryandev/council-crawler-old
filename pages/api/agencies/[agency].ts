import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Agency from '@/models/agency.model';

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
    case 'GET' /* Get a model by its slug */:
      try {
        const agency = await Agency.findOne({ slug: slug });
        if (!agency) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: agency });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its slug */:
      try {
        const agency = await Agency.findOneAndUpdate({ slug: slug }, req.body, {
          new: true,
          runValidators: true,
        });
        if (!agency) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: agency });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its slug */:
      try {
        const deletedAgency = await Agency.deleteOne({ slug: slug });
        if (!deletedAgency || deletedAgency.deletedCount == 0) {
          return res.status(400).json({
            success: false,
            message: 'Could not find an agency with the supplied slug.',
          });
        }
        res.status(200).json({ success: true, data: deletedAgency });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
