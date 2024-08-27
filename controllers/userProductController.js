const cloudinary = require("cloudinary");
const Product = require("../models/productModels.js");

const createProduct = async (req, res) => {
  try {
    if (req.file && req.body.imageURL) {
      return res.status(400).json({
        "message": "You cannot update image file and url at same time",
      });
    }
    const result = req.body;
    res.status(200).json(result);
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
    const response = await Product.findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error while deleting product: ", error);
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.findById(id);
    Object.assign(response, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error while deleting product: ", error);
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
    console.error("Error fetching products by category: ", error);
  }
};


const getAllCategories = async (req, res) => {
  console.log("fetching");
  try {
    const categories = await Product.distinct("category");
    console.log(categories);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Error fetching categories: ", error);
  }
};



module.exports = {
  createProduct,
  displayAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getAllCategories,
};
