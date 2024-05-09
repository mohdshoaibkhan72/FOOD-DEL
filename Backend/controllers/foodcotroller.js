const foodmodel = require("../models/Food.model");

const Addfood = async (req, res) => {
  try {
    const { Name, description, Price, image, Category } = req.body;

    // Check if all required fields are provided
    if (!Name || !description || !Price || !image || !Category) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide all fields" });
    }

    // Check if the product already exists
    const existingProduct = await foodmodel.findOne({ Name });
    if (existingProduct) {
      return res
        .status(409)
        .send({ success: false, message: "Product already exists" });
    }

    // Create a new food item
    const newFood = new foodmodel({
      Name,
      description,
      Price,
      image,
      Category,
    });

    // Save the new food item to the database
    await newFood.save();

    return res
      .status(201)
      .send({ success: true, message: "Product added to database" });
  } catch (error) {
    console.error("Error adding food:", error);
    return res
      .status(500)
      .send({ success: false, message: "Internal server error" });
  }
};

module.exports = Addfood;
