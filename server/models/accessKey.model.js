import mongoose, { Schema } from "mongoose";

const accessKeySchema = new mongoose.Schema({
    authUser: {
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    authGrantor: {
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        enum: ['invited', 'accepted', 'rejected', 'pending', ' active', 'suspended'],
        default: 'pending'
    },
    key: {
        type: String,
        enum: ['QueueCenter', 'Queue', 'Counter']
    },
    keyFor: {
        type: Schema.Type.ObjectId,
        refPath: 'key'
    }
},{timestamps: true});

const AccessKey = mongoose.Model('AccessKey',accessKeySchema);

export {AccessKey};