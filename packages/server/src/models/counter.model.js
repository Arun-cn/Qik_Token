import mongoose, { Schema } from "mongoose";

const counterSchema = new mongoose.Schema({
    name: {
        type: String,
        trime: true
    },
    queue: {
        type: Schema.Types.ObjectId,
        ref: "Queue"
    },
    admins: {
        type: Schema.Types.ObjectId,
        ref: 'AccessKey'
    }
});

const Counter = mongoose.model("Counter",counterSchema);

export {Counter};