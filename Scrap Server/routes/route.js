const express = require("express");
const router = express.Router();
const cors = require("cors");

const { addProduct, getProducts, getProduct, editProduct, deleteProduct } = require('../controllers/product-controller')
const { getUser, editUser} = require('../controllers/user-controller')


router.use(cors()); // Enable CORS for the router

router.post('/addproduct', addProduct)
router.get('/pricing', getProducts)
router.get('/:id', getProduct)
router.post('/:id', editProduct)
router.delete('/:id', deleteProduct)

router.get("/:username", getUser);
router.post('/:username', editUser)

module.exports = router;
