/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import SessionModel, { SessionDocument } from "./Session";

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
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: false,
      validate: {
        validator: (_id: number, _: any) => _id == null,
        message: "Cannot be added from here",
      },
    },
  ],
});

interface Course {
  name: string;
  supply: string[];
  address: String;
  rate: Number;
  coordinates: Object;
}

export interface CourseDocument extends Course, Document {
  sessions?: [SessionDocument["_id"]];
}

export interface CourseBaseModel extends Model<CourseDocument> {}

CourseSchema.post(
  "remove",
  async function ({ _id: course }, next: Function): Promise<void> {
    await SessionModel.findOneAndDelete({ course });
    return next();
  }
);

export default model<CourseDocument, CourseBaseModel>("Course", CourseSchema);
