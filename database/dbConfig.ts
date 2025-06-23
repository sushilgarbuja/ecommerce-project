import mongoose from "mongoose";

export async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        const connection=mongoose.connection;
        connection.on("connected",()=>{
            console.log("Connected to MongoDB");
        })
        connection.on("error",()=>{
            console.log("Error connecting to MongoDB");
        })
    } catch (error) {
        console.log(error);
    }
}