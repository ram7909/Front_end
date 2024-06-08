import React from 'react'
import './Product.css'
const product = {
    title: 'POCO M6 5G (Orion Blue, 4GB RAM, 128GB Storage)',
    description: 'Powerful MediaTek Dimensity 6100+ 5G SoC | 8GB of RAM including 4GB virtual | 6.74" HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Dual camera |Fast Side fingerprint | 5000mAh Battery',
    price: '8,999 /-',
    imgsrc: 'https://m.media-amazon.com/images/I/711v0d6yDLL._SY741_.jpg'
}

const Product = () => {
    return (
        <div className="main">
            <div className='product'>
                <img src={product.imgsrc} alt="" />
                <div className="items">
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <h5>{product.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Product