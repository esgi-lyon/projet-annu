/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";
import UserModel, { UserDocument } from "./User";

const CertificationSchema: Schema<
  CertificationDocument,
  CertificationBaseModel
> = new Schema<CertificationDocument, CertificationBaseModel>({
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
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

interface Certification {
  name: string;
  desc: string;
  tags: number;
}

export interface CertificationDocument extends Certification, Document {
  course: CourseDocument["_id"];
}

export interface CertificationBaseModel extends Model<CertificationDocument> {}

export default model<CertificationDocument, CertificationBaseModel>(
  "Certification",
  CertificationSchema
);
