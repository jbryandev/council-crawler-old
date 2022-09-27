import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Department name is required.'],
    maxLength: [100, 'Department name cannot be more than 100 characters'],
  },
  url: {
    type: String,
    required: [true, 'Department URL is required'],
  },
  agency: [{ type: Schema.Types.ObjectId, ref: 'Agency' }],
});

export default mongoose.models.Department ||
  mongoose.model('Department', DepartmentSchema);
