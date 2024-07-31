import express from "express";
import { addProducts, getProductById, getProducts } from "../controllers/product.js";

const router = express.Router()

// @method - get
// @route - /api/products/get
// @desc - to get all products
router.get('/get',getProducts)

// @method - add
// @route - /api/products/add
// @desc - to add product
router.post('/add',addProducts)

// @method - get
// @route - /api/products/:id
// @desc - to get product by Id
router.get('/:id',getProductById)

export default router;