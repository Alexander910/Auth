import mongoose, { Schema } from "mongoose";

const transformUser = (doc: any, ret: any) => {
  const { password, ...rest } = ret;
  return rest;
};

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  {
    timestamps: true,
    toJSON: { transform: transformUser },
    toObject: { transform: transformUser }
  }
);

export const User = mongoose.model("Usertest", UserSchema);

