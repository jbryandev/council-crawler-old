import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) throw new Error('MONGODB_URI not defined');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    mongoose.set('strictQuery', false);
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;

// export const getAllAgencies = async () => {
//   await dbConnect();
//   const result = await Agency.find();
//   const agencies = result.map((doc) => {
//     const agency = doc.toObject();
//     agency._id = agency._id.toString();
//     return agency;
//   });
//   return agencies;
// };

// export const getAgencyFromSlug = async (slug: string) => {
//   await dbConnect();
//   const result = await Agency.findOne({ slug: slug });
//   const agency = result.toObject();
//   agency._id = agency._id.toString();
//   return agency;
// };

// export const getAgencyById = async (id: string) => {
//   await dbConnect();
//   const result = await Agency.findById(id);
//   const agency = result.toObject();
//   agency._id = agency._id.toString();
//   return agency;
// };

// export const getAllAgencyMeetings = async (agency: IAgency) => {
//   await dbConnect();
//   const result = await Meeting.find({
//     agency: agency._id,
//   });
//   const meetings = result.map((doc) => {
//     const meeting = doc.toObject();
//     meeting._id = meeting._id.toString();
//     meeting.date = meeting.date.toString();
//     meeting.agency = meeting.agency.toString();
//     return meeting;
//   });
//   return meetings;
// };

// export const getAllMeetings = async () => {
//   await dbConnect();
//   const result = await Meeting.find();
//   const meetings = result.map((doc) => {
//     const meeting = doc.toObject();
//     meeting._id = meeting._id.toString();
//     meeting.date = meeting.date.toString();
//     meeting.agency = meeting.agency.toString();
//     return meeting;
//   });
//   return meetings;
// };

// export const getMeeting = async (id: string) => {
//   await dbConnect();
//   const result = await Meeting.findById(id);
//   const meeting = result.toObject();
//   meeting._id = meeting._id.toString();
//   meeting.date = meeting.date.toString();
//   meeting.agency = meeting.agency.toString();
//   return meeting;
// };

// export const addMeeting = async (
//   agency: IAgency,
//   name: string,
//   date: Date,
//   url: string,
//   agenda?: string
// ) => {
//   await dbConnect();
//   const meeting = new Meeting({ agency, name, date, url, agenda });
//   console.log(meeting);
//   // await meeting.save();
//   return meeting;
// };
