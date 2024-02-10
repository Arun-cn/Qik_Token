import mongoose, { Schema } from "mongoose";

const queueSchema = new mongoose.Schema(
  {
    queueName: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
    },
    currentToken: {
      type: Schema.Types.ObjectId,
      ref: "Token",
    },
    lastGivenTokenNumber: {
      type: Number,
      default: 0,
    },
    createdBy: {
      creatorType: {
        type: String,
        enum: ["User", "organistion"],
        required: true,
      },
      creatorId: {
        type: Schema.Types.ObjectId,
        refPath: "createraType",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    counters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Counter",
      },
    ],
    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: "AccessKey",
      },
    ],
  },
  { timestamps: true }
);

const Queue = mongoose.model("Queue", queueSchema);

export { Queue };
