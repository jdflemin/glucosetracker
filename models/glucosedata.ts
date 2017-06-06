import * as mongoose from 'mongoose';

export interface BloodSugar extends mongoose.Document {
  date: string;
  time: string;
  sugar: number
}

let bloodSugarSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  sugar: {
    type: Number,
    required: true
  }
});

export default bloodSugarSchema;
