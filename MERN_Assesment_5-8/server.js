import express from "express";
import bodyParse from 'express';
import mongoose from "mongoose";
import newsRouter from "./routes/news.js"
const app = express();
app.use(bodyParse.json())
const port = 1100;


// News Router
app.use('/api/news', newsRouter)

mongoose
    .connect("mongodb://localhost:27017", {
        dbName: 'News-API'
    })
    .then(() => console.log("MongoDB Connected Succesfully"))
    .catch(() => console.log("Internal Server Error"))

app.listen(port, () => console.log(`Server is running on Port ${port}`))