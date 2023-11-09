import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MONGODB_URL = `${process.env.MONGODB_URL}/${DB_NAME}`;  // Concatnete mongodb url with database name
console.log(MONGODB_URL);
const connectDB = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(MONGODB_URL);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export {connectDB};