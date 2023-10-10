// const Order = require("../schema/order-schema"); // Import your Order model

// exports.createOrder = async (req, res) => {
//   try {
//     const { userId, products } = req.body;
//     console.log(req.body)
//     const order = new Order({
//       userId,
//       products,
//     });
//     await order.save();
//     res.status(201).json(order);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the order." });
//   }
// };

// exports.getOrderHistory = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const orders = await Order.find({ userId });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred while fetching orders." });
//   }
// };

const Order = require("../schema/order-schema"); // Import your Order model

exports.createOrder = async (req, res) => {
  try {
    const { userId, products, address } = req.body; // Include address in the request body
    
    const order = new Order({
      userId,
      products,
      address, // Save the provided address object
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the order." });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching orders." });
  }
};
