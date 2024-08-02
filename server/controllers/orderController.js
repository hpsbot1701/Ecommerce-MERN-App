import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";
import { stripe } from "../server.js";

// Create orders
export const createOrderController = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    } = req.body;
    // //validation
    // if (
    //   !shippingInfo ||
    //   !orderItems ||
    //   !paymentMethod ||
    //   !paymentInfo ||
    //   !itemPrice ||
    //   !tax ||
    //   !shippingCharges ||
    //   !totalAmount
    // ) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Please Provide All Fields",
    //   });
    // }
    // create order
    await orderModel.create({
      user: req.user._id,
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    });

    //stock update
    for (let i = 0; i < orderItems.length; i++) {
      //find product
      const product = await productModel.findById(orderItems[i].product);
      product.stock -= orderItems[i].quantity;
      await product.save();
    }
    res.status(201).send({
      success: true,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Order API",
      error,
    });
  }
};

//Get all orders - My Orders
export const getMyOrdersController = async (req, res) => {
  try {
    //find orders
    const orders = await orderModel.find({ user: req.user._id });
    //validation
    if (!orders) {
      return res.status(404).send({
        success: false,
        message: "no orders found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your orders data",
      totalOrder: orders.length,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in My orders API",
      error,
    });
  }
};

// Get single order info
export const singleOrderDetailsController = async (req, res) => {
  try {
    //find orders
    const order = await orderModel.findById(req.params.id);
    //validation
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "no order found",
      });
    }
    res.status(200).send({
      success: true,
      message: "your order fetched",
      order,
    });
  } catch (error) {
    console.log(error);
    // cast error || OBJECT ID
    if (error.name === "CastError") {
      res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }

    res.status(500).send({
      success: false,
      message: "Error In Get single order details API",
      error,
    });
  }
};

//accept payments
export const paymentsController = async (req, res) => {
  try {
    // get amount
    const { totalAmount } = req.body;
    //validation
    if (!totalAmount) {
      return res.status(404).send({
        success: false,
        message: "Total Amount is required",
      });
    }
    const { client_secret } = await stripe.paymentIntents.create({
      amount: Number(totalAmount * 100),
      currency: "usd",
    });
    res.status(200).send({
      success: true,
      client_secret,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error In Get single order details API",
      error,
    });
  }
};
