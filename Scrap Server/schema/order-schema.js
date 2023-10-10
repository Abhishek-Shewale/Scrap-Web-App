// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   products: [
//     {
//       productId: { type: Number, required: true },
//       productName: { type: String, required: true },
//       price: { type: Number, required: true },
//     },
//   ],
//   orderDate: { type: Date, default: Date.now },
// });

// const Order = mongoose.model("Order", orderSchema);

// module.exports = Order;


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: Number, required: true },
      productName: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  address: {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },
  },
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
