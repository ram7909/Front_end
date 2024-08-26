// M V C
// M = Model - (DB Schema)
// V = Views - Client (React App)
// C = Controllers  - (functions)
import express from 'express'
import mongoose from 'mongoose';
import bodyParse from 'express';
import productRouter from './routes/product.js'
import userRouter from './routes/user.js'
import cors from 'cors'
const app = express();
app.use(bodyParse.json())
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

// Product Router
app.use('/api/products', productRouter)

//User Router
app.use('/api/user',userRouter)

mongoose
    .connect("mongodb://localhost:27017", {
        dbName: "Volcanus_Batch_4_PM"
    })
    .then(() => console.log("MongoDB Connected Succesfully"))
    .catch(() => console.log("Internal Server Erroe"))
const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));