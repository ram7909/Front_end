import express from "express";
import bodyParse from 'express'
const app = express();

app.use(bodyParse.json())

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
    res.json({
        name: 'Ramcharan',
        age: '20',
        salary: '20000',
        education: {
            12: 'CBSE',
            10: 'CBSE',
            UG: 'Holkar'
        },
        message: 'You are requested for the / route',
        success: true
    })
})
app.get('/product', (req, res) => {
    res.json({
        message: 'your requested has been accepted',
        product,
        success: true
    })
})

//get product by id (Dynamic Routing)
app.get('/product/:id',(req,res) =>{
    const id = req.params.id
    const productDetail = product.filter((data) => data.id == id)
    res.json({productDetail})
})


//add product by id
app.post('/product/add', (req,res)=>{
    // console.log(req.body);
    product.push(req.body);
    res.json({message:'Your Product Has Been Added Successfully',product})
})

//delete product by id
app.delete('/product/:id', (req,res) => {
    const id = req.params.id
    const newProduct = product.filter((data) => data.id != id)
    res.json({message:'Your Product Has Been Deleted',newProduct})
})



//update product by id
app.put('/product/update',(req,res)=>{
    const updatedProduct = req.body
    for(let i=0;i<product.length;i++){
        if(updatedProduct.id == product[i].id){
            product[i].productName = updatedProduct.productName;
            product[i].price = updatedProduct.price;
            product[i].os = updatedProduct.os;
            break;
        }
    }

    res.json({message:'your product has been updated', product,success:true})

})



const port = 2000;
app.listen(port, () => console.log(`Server is running on port ${port}`))