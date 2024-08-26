import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'
const ProductState = (props) => {
    const url = "http://localhost:1000/api";
    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await axios.get(`${url}/products/get`)
            setProducts(api.data.product)
        };
        fetchDataFromAPI();
    }, [reload])


    // user register

    // user login


    // add product
    const addProduct = async (title, description, price, qty, img, category) => {
        const api = await axios.post(`${url}/products/add`, {
            title,
            description,
            price,
            qty,
            img,
            category
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setReload(!reload)

        return api.data
    }


    // delete product by id
    const deleteProduct = async (id) => {
        const api = await axios.delete(`${url}/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setReload(!reload)

        return api.data
    }


    // edit product by id
    

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductState