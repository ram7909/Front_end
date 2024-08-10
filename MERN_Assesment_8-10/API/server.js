import express from 'express'
import bodyParse from 'express';
import mongoose from 'mongoose';
import movieRouter from './Routes/movie.js'
import cors from 'cors'
const app = express();
app.use(bodyParse.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
  }))
const port = 1000;
app.use('/api/movies',movieRouter)

mongoose
    .connect("mongodb://localhost:27017",{
        dbName:'Movie-API'
    })
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch(()=>console.log("Internal Server Error"))

app.listen(port,()=>console.log(`Server is Running on port ${port}`))