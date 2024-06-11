import React from 'react'

const Product = ({ title, price, des, image }) => {
    return (
        <div style={{
            marginTop:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
        
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'80%',
            borderRadius:'20px',
            border:"2px solid yellow",
            padding:'20px'
        }}>
            <div>
            <h2>{title}</h2>
            <h1>{price}</h1>
            <h5>{des}</h5>
            </div>

            <img src={image} alt="" />
        </div>
        </div>
    )
}

export default Product