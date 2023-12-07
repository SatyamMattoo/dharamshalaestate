import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Your name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
  },
  avtar: {
    required: false,
    type: String,
  },
  role: {
    required: true,
    type: String,
    default: "User",
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
