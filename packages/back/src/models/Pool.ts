/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";
import UserModel, { UserDocument } from "./User";

const PoolSchema: Schema<PoolDocument, PoolBaseModel> = new Schema<
  PoolDocument,
  PoolBaseModel
>({
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
      validate: {
        async validator(_id: number, _: any) {
          const student = await UserModel.findOne({ _id }).exec();
          if (student == null) return false;
          return student.role === "STUDENT";
        },
        message: "Error adding student",
      },
    },
  ],
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
  coach: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      // eslint-disable-next-line @typescript-eslint/return-await
      async validator(_id: number, _: any) {
        const coach = await UserModel.findOne({ _id }).exec();
        if (coach == null) return false;
        return coach.role === "COACH";
      },
      message: "Course doesn't exists",
    },
  },
});

export interface PoolDocument extends Document {
  course: CourseDocument["_id"];
  coach: UserDocument["_id"];
  students: [UserDocument["_id"]];
}

export interface PoolBaseModel extends Model<PoolDocument> {}

export default model<PoolDocument, PoolBaseModel>("Pool", PoolSchema);
