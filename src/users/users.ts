import mongoose, { Schema} from "mongoose";

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
    // 🛡️ Sentinel: Automatically exclude password from serialization to prevent sensitive data exposure
    toJSON: {
      transform: (doc, ret) => {
        const { password, ...rest } = ret;
        return rest;
      },
    },
    toObject: {
      transform: (doc, ret) => {
        const { password, ...rest } = ret;
        return rest;
      },
    },
  }
);

export const User = mongoose.model("Usertest", UserSchema);

