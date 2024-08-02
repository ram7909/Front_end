import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
const Product = () => {
    const {data} = useContext(ProductContext);
  return (
    <div>Product = {data}</div>
  )
}

export default Product