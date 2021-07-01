/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";

const SessionSchema: Schema<SessionDocument, SessionBaseModel> = new Schema<
  SessionDocument,
  SessionBaseModel
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

interface Session {
  name: string;
  desc: string;
  tags: number;
}

export interface SessionDocument extends Session, Document {
  course: CourseDocument["_id"];
}

export interface SessionBaseModel extends Model<SessionDocument> {}

SessionSchema.pre(
  "insertMany",
  async function (next: Function, docs: SessionDocument[]): Promise<void> {
    return next();
  }
);

export default model<SessionDocument, SessionBaseModel>("Room", SessionSchema);
