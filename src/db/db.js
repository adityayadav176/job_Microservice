import mongoose from "mongoose";
import { MONGODB_NAME } from "../constant/constant.js";

export const connectToMongo = async() => {
    try {
        const con = await mongoose.connect(`${process.env.MONGODB_URL}/${MONGODB_NAME}`)
        console.log(`Connect To Mongo Successfully`, con.connection.name);
    } catch (error) {
        console.log(`Something Went Wrong While Connecting To MongoDb Error Is : ${error.message || error}`)
        process.exit(1);
    }
}

