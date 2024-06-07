import React from 'react'
import './product.css'
const Product = () => {
    const product = {
        title:'HP Laptop 15s',
        price: 80000,
        description: 'Micro-edge display? The 15.6-inch, FHD, micro-edge, EPEAT registered, ENERGY STAR certified, 250-nit, and anti-glare display helps you see more of what s on your screen in great quality.;?Effortless connectivity? Wi-Fi 5 (2x2) and Bluetooth 5.0 help you be unstoppable with fast speeds. Experience reliable connectivity with 1 x USB Type-C, 2 x USB Type-A, and 1 x HDMI 1.4b ports.',
        imgsrc: "https://m.media-amazon.com/images/I/71oQh8WFlyL._SX679_.jpg"
      }
    const myStyle ={
            backgroundColor:'aqua',
            padding:'20px',
            textAlign:'center',
            margin:'20px'
    }
  return (
    // <div className='product'>
    <div
    //  style={{
    //         backgroundColor:'blue',
    //         padding:'20px',
    //         textAlign:'center'
    //     }}
    style={myStyle}
    >
        <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
      <img src={product.imgsrc} alt="" style={{width:'250px'}} />
    </div>
  )
}

export default Product