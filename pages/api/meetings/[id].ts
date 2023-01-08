import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/mongodb';
import Meeting from '@/models/meeting.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const meeting = await Meeting.findById(id);
        if (!meeting) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: meeting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const meeting = await Meeting.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!meeting) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: meeting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMeeting = await Meeting.deleteOne({ _id: id });
        if (!deletedMeeting || deletedMeeting.deletedCount == 0) {
          return res
            .status(400)
            .json({
              success: false,
              message: 'Could not find a meeting with the supplied ID.',
            });
        }
        res.status(200).json({ success: true, data: deletedMeeting });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
