import express from "express";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  productReviewController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

//routes
// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

//Create Product
router.post("/create", isAuth, isAdmin, singleUpload, createProductController);

//Update product
router.put("/:id", isAuth, isAdmin, updateProductController);

//Update product image
router.put(
  "/image/:id",
  isAuth,
  isAdmin,
  singleUpload,
  updateProductImageController
);

//delete product image
router.delete(
  "/delete-image/:id",
  isAuth,
  isAdmin,
  deleteProductImageController
);

//delete product
router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);

export default router;

// Review Product
router.put("/:id/review", isAuth, productReviewController);
