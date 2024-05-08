const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION);
    console.log("Db connected successfully");
  } catch (error) {
    console.log("The error is ", error);
  }
};

module.exports = connectDB;
