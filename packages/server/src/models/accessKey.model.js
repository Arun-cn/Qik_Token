import mongoose, { Schema } from "mongoose";

const accessKeySchema = new mongoose.Schema({
    authUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    authGrantor: {
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        refPath: 'key'
    }
},{timestamps: true});

const AccessKey = mongoose.model('AccessKey',accessKeySchema);

export {AccessKey};