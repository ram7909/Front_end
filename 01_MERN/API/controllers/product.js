import { Product } from "../Models/Product.js";

// Get All Product
export const getProducts = (req, res) => {
    res.json({ message: "all product", product })
}

// Add Product
export const addProducts = async (req, res) => {
    const { title, description, price, qty, img } = req.body;
    let product = await Product.create({ title, description, price, qty, img })

    res.json({
        message: "product add succesfully",
        product,
        success: true
    })
}