import * as mongoose from 'mongoose';

export interface DiscussionsData extends mongoose.Document{
  discussionContent: string,
  discussionCodeLink: string,
  discussionTimeStamp: string,
  discussionThanks: number,
  discussionUser: string
}

let discussionSchema = new mongoose.Schema({
  discussionUser: {
    type: String,
    required: true
  },
  discussionContent: {
    type: String,
    required: true,
  },
  discussionCodeLink: {
    type: String
  },
  discussionTimeStamp: {
    type: String,
    required: true,
  },
  discussionThanks: {
    type: Number
  }
});


export default discussionSchema;
