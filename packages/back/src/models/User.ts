import { Document, Model, model, Schema } from "mongoose";
// import { RoomDocument } from "./Room";

// Schema
const UserSchema: Schema<UserDocument, UserModel> = new Schema<
  UserDocument,
  UserModel
>({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  city: {
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
  login: string;
  password: string;
  adress: string;
  city: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface UserDocument extends User, Document {
  fullName: string;
  // currentRoom?: RoomDocument["_id"];
}

// For model
export interface UserModel extends Model<UserDocument> {
  // findRoom: (id: string) => Promise<RoomDocument>;
}

// Virtuals
UserSchema.virtual("fullName").get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName ?? ""}`;
});

export default model<UserDocument, UserModel>("User", UserSchema);
