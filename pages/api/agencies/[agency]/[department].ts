import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Department from '@/models/department.model';

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
        const department = await Department.findOne({ slug: slug });
        if (!department) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: department });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its slug */:
      try {
        const department = await Department.findOneAndUpdate(
          { slug: slug },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!department) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: department });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its slug */:
      try {
        const deletedDepartment = await Department.deleteOne({ slug: slug });
        if (!deletedDepartment || deletedDepartment.deletedCount == 0) {
          return res.status(400).json({
            success: false,
            message: 'Could not find a department with the supplied slug.',
          });
        }
        res.status(200).json({ success: true, data: deletedDepartment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
