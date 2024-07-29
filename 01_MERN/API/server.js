import express from 'express'
import mongoose from 'mongoose';
import { Product } from './Models/Product.js';
import bodyParse from 'express';
const app = express();
app.use(bodyParse.json())
const product = [
    { id: 1, title: 'i-phone 13', price: 50000 },
    { id: 2, title: 'i-phone 14', price: 70000 },
    { id: 3, title: 'i-phone 15', price: 100000 }
];
app.get('/api/products/get', (req, res) => {
    res.json({ message: "all product", product })
})
app.post("/api/product/add", async (req, res) => {
    const { title, description, price, qty, img } = req.body;
    let product = await Product.create({ title, description, price, qty, img })

    res.json({ message: "product add succesfully", product, success: true })
})
mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "Volcanus_Batch_4_PM"
    })
    .then(() => console.log("MongoDB Connected Succesfully"))
    .catch(() => console.log("Internal Server Erroe"))
const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));