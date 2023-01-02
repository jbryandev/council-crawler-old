import dbConnect from '@/utils/mongodb';
import AgencyModel from '@/models/agency.model';
import { NextApiRequest, NextApiResponse } from 'next';

// ----------------------------------------------------------------------

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const agencies = AgencyModel;
    const allAgencies = await agencies.find({});
    res.status(200).json({ agencies: allAgencies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
