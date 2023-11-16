import mongoose, { Schema } from "mongoose";

const queueSchema = new mongoose.Schema({
    queueName: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    location: {
        type:String,
        trim: true
    },
    currentToken: {
        type: Schema.Types.ObjectId,
        ref: 'Token'
    },
    createdBy: {
        createrType: {
          type: String,
          enum: ['User','organistion'],
          required: true
        },
        createrId:{
            type: Schema.Types.ObjectId,
            refPath: 'createraType'
        }
    },
    createdAt: { 
        type: Date, default: Date.now 
    },
    counters: [{
        type: Schema.Types.ObjectId,
        ref: 'Counter'
    }],
    tokens: [{
        type: Schema.Types.ObjectId,
        ref: 'Token'
    }],
    admins: [{
        type: Schema.Types.ObjectId,
        ref: 'AccessKey'
    }]
},{timestamps: true});

const Queue = mongoose.Model("Queue",queueSchema);

export {Queue}