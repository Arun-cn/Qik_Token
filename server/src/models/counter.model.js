import mongoose, { Schema } from "mongoose";

const counterSchema = new mongoose.Schema({
    name: {
        type: String,
        trime: true
    },
    queue: {
        type: Schema.Type.ObjectId,
        ref: "Queue"
    },
    admins: {
        type: Schema.Type.ObjectId,
        ref: 'AccessKey'
    }
});

const Counter = mongoose.model("Counter",counterSchema);

export {Counter};