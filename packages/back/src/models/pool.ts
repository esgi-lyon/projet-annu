/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";

const PoolSchema: Schema<PoolDocument, PoolBaseModel> = new Schema<
  PoolDocument,
  PoolBaseModel
>({
  name: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    validate: {
      // eslint-disable-next-line @typescript-eslint/return-await
      async validator(_id: number, _: any) {
        return await CourseModel.exists({ _id });
      },
      message: "Course doesn't exists",
    },
  },
});

interface Pool {
  name: string;
  desc: string;
  tags: number;
}

export interface PoolDocument extends Pool, Document {
  course: CourseDocument["_id"];
}

export interface PoolBaseModel extends Model<PoolDocument> {}

export default model<PoolDocument, PoolBaseModel>("Pool", PoolSchema);
