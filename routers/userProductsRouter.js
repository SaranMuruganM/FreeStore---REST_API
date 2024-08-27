const { Router } = require("express");
const router = Router();

const {
  createProduct,
  displayAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getAllCategories,
} = require("../controllers/userProductController");
const upload = require("../middleware/multer");

router.post("/newproduct", upload.single("productImage"), createProduct);
router.get("/", displayAllProducts);
router.get("/categories", getAllCategories);
router.get("/category/:category", getProductByCategory);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
