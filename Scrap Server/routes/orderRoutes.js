const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/order-controller");

// Define endpoint to store orders
router.post("/createOrder", ordersController.createOrder);

// Define endpoint to fetch order history for a specific user
router.get("/:userId", ordersController.getOrderHistory);

module.exports = router;
