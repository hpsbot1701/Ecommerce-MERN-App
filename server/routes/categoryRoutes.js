import express from "express";

import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategoryController,
  getAllCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// ========== CAT ROUTES ========
// Create Category
router.post("/create", isAuth, isAdmin, createCategory);

// Get All Category
router.get("/get-all", getAllCategoryController);

//Delete category
router.delete("/delete/:id", isAuth, isAdmin, deleteCategoryController);

//Update all category
router.put("/update/:id", isAuth, isAdmin, updateCategoryController);

export default router;
