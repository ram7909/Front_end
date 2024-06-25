import React from 'react'
import './Product.css'
const Product = () => {
    return (
        <>
            <div className="container bg-dark col-sm-4 text-light">
            <div className="head-div">
                <hr/>
                <h5>Products</h5>
                <hr/>
            </div>
                <div className="first">
                    <div className="img">
                        <img src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />
                    </div>
                    <div className="img">
                        <img src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />
                    </div>
                </div>
                <div className="second" data-aos="fade-right" data-aos-duration="1000">
                    <div className="img">
                        <img src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />
                    </div>
                    <div className="img">
                        <img src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product