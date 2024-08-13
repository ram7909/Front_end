import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'
const ProductState = (props) => {
    const url = "http://localhost:1000/api";
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchDataFromAPI = async () =>{
            const api = await axios.get(`${url}/products/get`)
            setProducts(api.data.product)
        };
        fetchDataFromAPI();
    }, [])
    

    // user register

    // user login

    // add product

    // delete product by id

    // edit product by id
    

    return (
        <ProductContext.Provider value={{products }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState