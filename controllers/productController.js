const cloudinary = require("cloudinary");
const Product = require("../models/productModels.js");

const createProduct = async (req, res) => {
  try {
    if (req.file && req.body.imageURL) {
      return res.status(400).json({
        "message": "You cannot update image file and url at same time",
      });
    }

    const uploadedImage = req.body.imageURL || req.file.path;

    const response = await cloudinary.v2.uploader.upload(uploadedImage);

    const product = await Product.create({
      ...req.body,
      imageURL: response.secure_url,
      cloudinaryID: response.public_id,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const displayAllProducts = async (req, res) => {
  try {
    const response = await Product.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findById(id);
    if (!response) {
      return res
        .status(404)
        .json({ message: "cannot find product you are looking for :)" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error while fetching products: ", error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error while fetching products: ", error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res
        .status(404)
        .json({ message: "could not find product with this id" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const response = await Product.find({ category: category });
    if (!response.length) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error while fetching products by category: ", error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct,
  getAllCategories,
  displayAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory
};
