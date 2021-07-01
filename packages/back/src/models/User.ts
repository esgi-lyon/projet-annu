import { Document, Model, model, Schema } from "mongoose";

// Schema
const UserSchema: Schema<UserDocument, UserModel> = new Schema<
  UserDocument,
  UserModel
>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["TEACHER", "MANAGER", "COACH", "STUDENT"],
    required: true,
  },
});

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface UserDocument extends User, Document {
  fullName: string;
}

// For model
export interface UserModel extends Model<UserDocument> {}

// Virtuals
UserSchema.virtual("fullName").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName ?? ""}`;
});

export default model<UserDocument, UserModel>("User", UserSchema);
