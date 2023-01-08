import { Schema, Types, model, models } from 'mongoose';

export interface IMeeting {
  _id: Types.ObjectId;
  agency: Types.ObjectId;
  name: string;
  date: Date;
  url: string;
  agenda?: string;
}

const MeetingSchema = new Schema<IMeeting>({
  agency: [{ type: Schema.Types.ObjectId, ref: 'Agency', required: true }],
  name: { type: String, required: true, default: 'Regular Meeting' },
  date: { type: Date, required: true, default: Date.now() },
  url: { type: String, required: true },
  agenda: { type: String },
});

const Meeting = models.Meeting || model<IMeeting>('Meeting', MeetingSchema);

export default Meeting;
