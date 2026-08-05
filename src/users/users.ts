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
    timestamps: true
  }
);

// Security: Add transforms to exclude sensitive fields (password, __v) from API responses
UserSchema.set("toJSON", {
  transform: (doc, ret) => {
    const { password, __v, ...rest } = ret;
    return rest;
  }
});

UserSchema.set("toObject", {
  transform: (doc, ret) => {
    const { password, __v, ...rest } = ret;
    return rest;
  }
});

export const User = mongoose.model("Usertest", UserSchema);

