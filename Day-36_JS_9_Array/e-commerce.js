const product = [
    {title: 'Iphone 12',price: 60000,color:"blue",camera: "12 pixel"},
    {title: 'Laptop',price: 90800,color:"gray",camera: "2 pixel"},
    {title: 'Camera',price: 9000,color:"white",camera: "200 pixel"},
    {title: 'Monitor',price: 5000,color:"silver",display:"34 inch"},
    {title: 'CPU',price: 10000,color:"green",ram:'8 GB'}
]
// for(let i=0;i<product.length;i++){
//     console.log(product[i])
// }

// let i=0;
// while(i<product.length){
//     console.log(product[i].color)
//     i++;
// }

// for (const key in product) {
//     console.log(key,product[key])
// }

// for (const element of product) {
//     console.log(element)
// }
product.forEach((value,index)=>console.log(index,value.title))