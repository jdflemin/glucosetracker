import * as mongoose from 'mongoose';
import GlucoseModel from './glucosedata';
import {BloodSugar} from './glucosedata';
import DoctorModel from './doctordata';
import {DoctorNotes} from './doctordata';

export interface UserInfo extends mongoose.Document {
  username: string;
  password: string;
  role: string
  bloodsugars: BloodSugar[];
  doctornotes: DoctorNotes[]
}

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['D', 'U'],
  },
  bloodsugars: [GlucoseModel],
  doctornotes: [DoctorModel]
});


export default mongoose.model<UserInfo>('UserInfo', userSchema)
