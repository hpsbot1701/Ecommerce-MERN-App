import express from "express";

import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
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

// ====== ADMIN PART =======
//get all orders
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

//change order status
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);

export default router;
