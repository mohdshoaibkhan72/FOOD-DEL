const mongoose = require("mongoose");

const foodschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true, // Corrected from "require" to "required"
  },
  description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

const foodmodel = mongoose.model("food", foodschema);

module.exports = foodmodel;
