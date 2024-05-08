import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: email,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
