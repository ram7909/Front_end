import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";

const Product = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        {products.map((e) =>
          <div key={e._id} className="col-md-4" style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <div className="card bg-dark text-light" style={{ width: '18rem' }}>
              <img src={e.img} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.price} ₹</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;