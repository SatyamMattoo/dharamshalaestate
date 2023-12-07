import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a Title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter a Description"],
    maxLength: [500, "Your description cannot exceed 500 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    maxLength: 8,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ["unsold", "sold"],
    default: "unsold",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Property =
  mongoose.models.properties || mongoose.model("properties", propertySchema);
