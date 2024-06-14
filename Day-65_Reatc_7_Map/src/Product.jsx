import React from 'react'

const Product = () => {
    const product = [
        {
            title:'Iphone 14 Pro Max',
            des:'15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light',
            price:'72,000 /-'
        },
        {
            title:'One Plus Node CE4',
            des:'Processor: The Qualcomm Snapdragon 7 Gen 3 chipset not only gives your Nord CE4 silly levels of OnePlus Fast and Smooth performance, but it also guards your battery life and maximizes power efficiency.',
            price:'24,999 /-'
        },
        {
            title:'Poco M6 5G',
            des:'Processor: Powerful MediaTek Dimensity 6100+ 5G SoC | 8GB of RAM including 4GB virtual | 6.74" HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Dual camera |Fast Side fingerprint | 5000mAh Battery',
            price:'8,999 /-'
        },
    ]
  return (
    <>
        {product.map((data)=>
            <div key={Math.random()} style={{
                backgroundColor:'lightblue',
                color:'black',
                    textAlign:'center',
                    padding:'10px',
                    margin:'10px'
            }}>
                <h1>{data.title}</h1>
                <h2>{data.price}</h2>
                <h3>{data.des}</h3>
            </div>
        )}
    </>
  )
}

export default Product