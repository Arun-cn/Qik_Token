import mongoose, { Schema } from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    queue: {
      type: Schema.Types.ObjectId,
      ref: "Queue",
      required: true,
    },
    tokenNumber: {
      type: Number,
    },
    expireDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Processing",
        "Completed",
        "Error",
        "Canceled",
        "Delivered",
        "Checked",
      ],
      default: "Pending",
    },
  },
  { timestamp: true }
);

const Token = mongoose.model("Token", tokenSchema);

export { Token };
