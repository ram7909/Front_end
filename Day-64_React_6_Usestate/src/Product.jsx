import React from 'react'
import { useState } from 'react'
const Product = () => {
    const [product, setProduct] = useState("Iphone 17")

    const next = ()=>{
        setProduct("Samsung")
    }
  return (
    <>
        <h1>Product : {product}</h1>
        <button onClick={next}>Next Mobile</button>
    </>
  )
}

export default Product