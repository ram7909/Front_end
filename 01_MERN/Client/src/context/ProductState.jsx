import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'
const ProductState = (props) => {
    const url = "http://localhost:1000/api";
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchDataFromAPI = async () =>{
            const api = await axios.get(`${url}/products/get`)
            console.log("products = ", api.data.product);
            setProducts(api.data.product)
        };
        fetchDataFromAPI();
    }, [])
    

    return (
        <ProductContext.Provider value={{products }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState