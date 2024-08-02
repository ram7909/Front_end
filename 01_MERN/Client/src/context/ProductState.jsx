import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'
const ProductState = (props) => {
    const url = "http://localhost:1000/api";
    const [products, setProducts] = useState([])
    useEffect(() => {
        
    }, [])
    

    return (
        <ProductContext.Provider value={{ data }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState