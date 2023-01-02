import { Schema, model, models } from 'mongoose';

export interface IMeeting {
  _id: string;
  name: string;
  date: Date;
  url: string;
  agenda?: string;
  agency: string;
}

const MeetingSchema = new Schema<IMeeting>({
  name: { type: String, required: true, default: 'Regular Meeting' },
  date: { type: Date, required: true, default: Date.now() },
  url: { type: String, required: true },
  agenda: { type: String },
  agency: [{ type: Schema.Types.ObjectId, ref: 'Agency', required: true }],
});

const Meeting = models.Meeting || model<IMeeting>('Meeting', MeetingSchema);

export default Meeting;
