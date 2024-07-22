import express from "express";

const app = express()
//CRUD Create Read Update Delete
//Create => Post
//Read => Get
//Update => Put
//Delete => Delete

//DATA
const product = [
    { id: '1', productName: 'Apple Iphone', price: 110000, os: 'ios' },
    { id: '2', productName: 'Samsung Galaxy', price: 90000, os: 'android' },
    { id: '3', productName: 'lava', price: 10000, os: 'android' }
]



//Routing
app.get('/', (req, res) => {
    res.json({ name: 'Ramcharan', age: '20', salary: '20000', education: { 12: 'CBSE', 10: 'CBSE', UG: 'Holkar' }, message: 'You are requested for the / route', success: true })
})
app.get('/home', (req, res) => {
    res.json({ message: 'Your request has been accepted',product, success: true });
})
app.get('/about', (req, res) => {
    res.json({ institute: 'Volcanus', course: { courseName: 'java full stack', courseName: 'MERN Stack Developer' }, message: 'You are requested for the about route', success: true })
})
app.get('/product', (req, res) => {
    res.json({
        message: 'your requested has been accepted',
        product,
        success: true
    })
})

const port = 2000;
app.listen(port, () => console.log(`Server is running on port ${port}`))