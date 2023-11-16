import mongoose, { Schema } from  "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
     },
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
    password: {
        type: String,
        required: [true, 'Password is required']
      },
    tokens: [{
      type: Schema.Type.ObjectId,
      ref : 'Token'
    }],
    queues: [{
      type: Schema.Type.ObjectId,
      ref: "Queue"
    }],
    accesskeys: [{
      type: Schema.Type.ObjectId,
      ref: "AccessKey"  
    }]
},{timestamp: true});

const User = mongoose.Model('User',userSchema);

export {User}