/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";
import UserModel, { UserDocument } from "./User";

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
  startAt: {
    type: Date,
    required: true,
  },
  finishAt: {
    type: Date,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      // eslint-disable-next-line @typescript-eslint/return-await
      async validator(_id: number, _: any) {
        const coach = await UserModel.findOne({ _id }).exec();
        if (coach == null) return false;
        return coach.role === "TEACHER";
      },
      message: "Course doesn't exists",
    },
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
}

export interface SessionDocument extends Session, Document {
  course: CourseDocument["_id"];
  teacher: UserDocument["_id"];
}

export interface SessionBaseModel extends Model<SessionDocument> {}

SessionSchema.pre(
  "insertMany",
  async function (next: Function, documents: SessionDocument[]): Promise<void> {
    const currentCountDoc = await (this as SessionBaseModel)
      .countDocuments({})
      .exec();
    if (currentCountDoc + documents.length > 3) {
      throw new Error("Maximum session in course planned");
    }
    return next();
  }
);

export default model<SessionDocument, SessionBaseModel>(
  "Session",
  SessionSchema
);
