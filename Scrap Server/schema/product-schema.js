const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productId: {
    type: Number,
    unique: true,
    default: 0,
  },
  name: String,
  price: Number,
  image: String,
});

productSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const lastProduct = await this.constructor.findOne(
        {},
        {},
        { sort: { productId: -1 } }
      );
      const newProductId = lastProduct ? lastProduct.productId + 1 : 0;
      this.productId = newProductId;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const product = mongoose.model("products", productSchema);

module.exports = product; 
