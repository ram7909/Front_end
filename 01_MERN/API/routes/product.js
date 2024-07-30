import express from "express";
import { addProducts, getProducts } from "../controllers/product.js";

const router = express.Router()

// @method - get
// @route - /api/products/get
// @desc - to get all products
router.get('/get',getProducts)

// @method - add
// @route - /api/products/add
// @desc - to add product
router.post('/add',addProducts)

export default router;