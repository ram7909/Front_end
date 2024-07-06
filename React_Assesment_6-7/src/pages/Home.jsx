import React from 'react';
import './Home.css';
import { data } from '../data';
import { Link } from 'react-router-dom';

const Home = ({ cart, setCart }) => {

    const addCart = (product) => {
        console.log("add to cart", product);
        setCart([...cart, product]); // Update the cart state by adding the new product
        console.log(cart); // Log the updated cart state
    }

    return (
        <>
            {data.map((e) => (
                <div key={e.id}>
                    <div className="container">
                        <div className="card bg-dark text-light" style={{ width: '19rem' }}>
                            <div className="img">
                                <img src={e.imgSrc} className="card-img-top" alt={e.title} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                                <div>
                                    <button type="button" className="btn btn-primary">{e.price}/-</button>
                                    <button type="button" onClick={() => addCart(e)} className="btn btn-warning">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Home;
