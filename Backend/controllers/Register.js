// Controller (controllers/Register.js)
const User = require("../models/Registration.models");

const Registeruser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    // Check if all fields are provided
    if (!fullname || !email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide all fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .send({ success: false, message: "User already exists" });
    }

    // Create a new user
    const user = new User({ fullname, email, password });
    await user.save();

    // Send a success response
    return res
      .status(201)
      .send({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .send({ success: false, message: "Internal Server Error" });
  }
};

module.exports = Registeruser;
