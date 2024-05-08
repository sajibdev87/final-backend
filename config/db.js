import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect ('mongodb+srv://food-del:HmI7QjgxYTxDxGz1@cluster0.uymopdb.mongodb.net/food-del').then(()=>console.log("DB connected"));
}