import express from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import {
  createOrderController,
  getMyOrdersController,
  paymentsController,
  singleOrderDetailsController,
} from "../controllers/orderController.js";

const router = express.Router();

//routes
// ========== ORDERS ROUTES ========
// Create orders
router.post("/create", isAuth, createOrderController);

// Get all orders
router.get("/my-orders", isAuth, getMyOrdersController);

// Get single order details
router.get("/my-orders/:id", isAuth, singleOrderDetailsController);

//accept payments
router.post("/payments", isAuth, paymentsController);

export default router;
