/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import SessionModel from "./Session";
import PoolModel from "./Pool";
import CertificationModel from "./Certification";

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
  desc: String;
  tags: string[];
}

export interface CourseDocument extends Course, Document {}

export interface CourseBaseModel extends Model<CourseDocument> {}

CourseSchema.post(
  "remove",
  async function ({ _id: course }, next: Function): Promise<void> {
    await SessionModel.findOneAndDelete({ course });
    await PoolModel.findOneAndDelete({ course });
    await CertificationModel.findOneAndDelete({ course });
    return next();
  }
);

export default model<CourseDocument, CourseBaseModel>("Course", CourseSchema);
