import * as mongoose from 'mongoose';
import DiscussionsModel from './discussionsModel';
import {DiscussionsData} from './discussionsModel';

export interface AnswerData extends mongoose.Document {
  answerUser: string;
  answerContent: string;
  answerTimeStamp: string;
  answerThanks: number;
  answerBest: boolean;
  answerCodeLink: string;
  discussions: DiscussionsData[];
}

let answerSchema = new mongoose.Schema({
  answerUser: {
    type: String,
    required: true
  },
  answerContent: {
    type: String,
    required: true
  },
  answerTimeStamp: {
    type: String,
    required: true
  },
  answerThanks: {
    type: Number,
  },
  answerBest: {
    type: Boolean,
    unique: true
  },
  answerCodeLink: {
    type: String,
  },
  discussions: [DiscussionsModel],
});

export default answerSchema;
