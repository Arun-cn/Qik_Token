import mongoose, { Schema } from "mongoose";

const queueCenterSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String
    },
    url:{
        type: String,
        required: true,
        unique: true,
        index: ture
    },
    location: {
        type: String,
        trim: true
    },
    qeeueCenterImage: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    queues: [{
        type: Schema.Types.ObjectId,
        ref: "Queue"
    }],
    admins: [{
        type: Schema.Types.ObjectId,
        ref: "AccessKey"
    }]
},{timestamps: true});

const QueueCenter = mongoose.model('QueueCenter',queueCenterSchema);

export {QueueCenter} ;