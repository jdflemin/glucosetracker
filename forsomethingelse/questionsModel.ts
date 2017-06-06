import * as mongoose from 'mongoose';
import AnswersModel from './answersModel';
import {AnswersData} from './answersModel';

export interface QuestionsData extends mongoose.Document {
  questionUser: string;
  questionTitle: string;
  questionContent: string;
  questionCodeLink: string;
  questionTimeStamp: string;
  questionThanks: number;
  answers: AnswerData[];
}

let questionSchema = new mongoose.Schema({
  questionUser: {
    type: String,
    required: true
  },
  questionTitle: {
    type: String,
    required: true
  },
  questionContent: {
    type: String,
    required: true
  },
  questionCodeLink: {
    type: Number,
  },
  questionTimeStamp: {
    type: Boolean,
    unique: true
  },
  questionThanks: {
    type: String,
  },
  answers: [AnswersModel],
});

export default questionSchema;
