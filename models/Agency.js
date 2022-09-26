import mongoose from 'mongoose';

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this agency.'],
    maxLength: [100, 'Name cannot be more than 100 characters'],
  },
});

export default mongoose.models.Agency || mongoose.model('Agency', AgencySchema);
