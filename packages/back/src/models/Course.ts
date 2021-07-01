/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import SessionModel from "./Session";

const CourseSchema: Schema<CourseDocument, CourseBaseModel> = new Schema<
  CourseDocument,
  CourseBaseModel
>({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
});

interface Course {
  name: string;
  supply: string[];
  address: String;
  rate: Number;
  coordinates: Object;
}

export interface CourseDocument extends Course, Document {}

export interface CourseBaseModel extends Model<CourseDocument> {}

CourseSchema.post(
  "remove",
  async function ({ _id: course }, next: Function): Promise<void> {
    await SessionModel.findOneAndDelete({ course });
    return next();
  }
);

export default model<CourseDocument, CourseBaseModel>("Course", CourseSchema);
