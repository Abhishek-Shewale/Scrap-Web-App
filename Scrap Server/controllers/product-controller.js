const Product = require("../schema/product-schema");

const addProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
   try {
     const product = await Product.findOne({productId: req.params.id});
     res.status(200).json(product);
   } catch (error) {
     res.status(404).json({ message: error.message });
   } 
}

const editProduct = async (req, res) => {
    
    let product = req.body;
    const editProduct = new Product(product)

    try {
        await Product.updateOne({productId: req.params.id}, editProduct)
        res.status(201).json(editProduct)
    } catch (error){
        res.status(409).json({message:error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({productId: req.params.id})
        res.status(200).json({message: "Product deleted sucessfully"})
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
module.exports = { addProduct, getProducts, getProduct, editProduct, deleteProduct };
