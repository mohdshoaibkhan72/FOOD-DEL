// Controller (controllers/Login.js)
const express = require("express");
const User = require("../models/Registration.models");
const bcrypt = require("bcrypt");
const app = express();

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .send({ success: false, message: "User not found, please register" });
    }

    // Compare hashed password
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .send({ success: false, message: "Incorrect password" });
    }

    // Login successful
    console.log("Login successful");
    return res.status(200).send({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

module.exports = Login;
