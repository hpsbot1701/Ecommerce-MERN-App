import express from "express";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//routes
// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

//Create Product
router.post("/create", isAuth, singleUpload, createProductController);

//Update product
router.put("/:id", isAuth, updateProductController);

//Update product image
router.put("/image/:id", isAuth, singleUpload, updateProductImageController);

//delete product image
router.delete("/delete-image/:id", isAuth, deleteProductImageController);

//delete product
router.delete("/delete/:id", isAuth, deleteProductController);

export default router;
