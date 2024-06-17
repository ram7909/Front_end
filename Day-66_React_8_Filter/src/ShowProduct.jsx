import React from 'react'
import { products } from './ProductData'

const ShowProduct = ({ setProductData, productData }) => {
    const filterByCategory = (category) => {
        const newProduct = products.filter((data) => data.category == category)
        setProductData(newProduct)
    }

    const filterByPrice = (price) =>{
        const newPrice = products.filter((data)=> data.price < price)
        setProductData(newPrice)
    }
    const filterByPric = (price) =>{
        const newPrice = products.filter((data)=> data.price > price)
        setProductData(newPrice)
    }


    return (
        <>
            <div style={{
                textAlign: 'center',
                padding: '10px',
            }}>
                <button onClick={() => filterByCategory("Electronics")}>Electronics</button>
                <button onClick={() => filterByCategory("Fashion")}>Fashion</button>
                <button onClick={() => filterByCategory("Home & Kitchen")}>Homes & Kitchen</button>
                <button onClick={() => filterByPrice("200")}>Less Than 200</button>
                <button onClick={() => filterByPrice("500")}>Less Than 500</button>
                <button onClick={() => filterByPric("1000")}>More Than 1000</button>
            </div>
            <div>
                {productData.map((data) =>
                    <div key={data.id} style={{
                        backgroundColor: "brown",
                        textAlign: 'center',
                        margin: '10px',
                        padding: '20px',
                        border: '2px solid yellow',
                        borderRadius: '10px'
                    }}>
                        <h1>{data.title}</h1>
                        <h4>{data.description}</h4>
                        <h2>{data.price}</h2>
                        <h3>{data.category}</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default ShowProduct