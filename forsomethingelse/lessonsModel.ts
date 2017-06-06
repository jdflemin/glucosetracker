import * as mongoose from 'mongoose';
import QuestionsModel from './questionsModel';
import {QuestionsData} from './questionsModel';

export interface LessonsData extends mongoose.Document {
  lessonTitle: string;
  lessonActive: boolean;
  questions: QuestionsData[];
}

let lessonSchema = new mongoose.Schema({
  lessonTitle: {
    type: String,
    required: true
  },
  lessonActive: {
    type: Boolean,
    required: true
  },
  questions: [QuestionsModel],
});

export default lessonSchema;
