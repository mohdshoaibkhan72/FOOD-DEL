import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.CONNECTION)
      .then(console.log("Db connected succesfully "));
  } catch (error) {
    console.log("The error is ", error);
  }
};
