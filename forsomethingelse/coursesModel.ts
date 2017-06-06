import * as mongoose from 'mongoose';
import LessonsModel from './lessonsModel';
import {LessonsData} from './lessonsModel';

export interface CoursesData extends mongoose.Document {
  courseTitle: string;
  courseActive: boolean;
  lessons: lessonsData[];
}

let lessonSchema = new mongoose.Schema({
  courseTitle: {
    type: String,
    required: true
  },
  courseActive: {
    type: Boolean,
    required: true
  },
  lessons: [LessonsData],
});

export default mongoose.model<CoursesData>('courseData', lessonSchema)
