import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const url = 'http://localhost:1000/api'
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const api = await axios.get(`${url}/products/${id}`)
            // console.log("products = ", api.data.product);
            setProduct(api.data.product)
        };
        fetchDataFromAPI();
    }, [id])

    return (
        <>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height:'50vh'
            }}>
                {product.map((e) => <div key={e._id}>
                    <div className="card p-3 mb-3 bg-dark text-light" style={{ width: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={e.img} className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.description}</p>
                                    <h4>{e.price} ₹</h4>
                                    <p className="card-text">{e.qty}</p>
                                    <p className="card-text">{e.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>

        </>
    )
}

export default ProductDetail