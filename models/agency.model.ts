import { Schema, Types, model, models } from 'mongoose';

export interface IAgency {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  url: string;
}

const AgencySchema = new Schema<IAgency>({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  url: { type: String, required: true },
});

const Agency = models.Agency || model<IAgency>('Agency', AgencySchema);

export default Agency;
