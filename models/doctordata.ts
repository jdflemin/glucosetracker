import * as mongoose from 'mongoose';

export interface DoctorNotes extends mongoose.Document {
  bolus: number;
  basal: number;
  correction: String
}

let doctorNotesSchema = new mongoose.Schema({
  bolus: {
    type: Number,
    required: true
  },
  basal: {
    type: Number,
    required: true
  },
  correction: {
    type: String,
    required: true
  }
});

export default doctorNotesSchema;
