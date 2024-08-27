const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    cloudinaryID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
