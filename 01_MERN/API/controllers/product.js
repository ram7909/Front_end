import { Product } from "../Models/Product.js";

// Get All Product
export const getProducts = async (req, res) => {
    try {
        let product = await Product.find();
        res.json({ message: "all product", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }

}

// Add Product
export const addProducts = async (req, res) => {
    const { title, description, price, qty, img } = req.body;
    try {
        let product = await Product.create({ title, description, price, qty, img })
        res.json({
            message: "product add succesfully",
            product,
            success: true
        })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}


// Get Product By ID
export const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.find({ _id: id });
        res.json({ message: "Product Details", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}