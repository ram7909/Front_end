import React from 'react'
import { Link } from 'react-router-dom'
import { arr } from '../../data'
const Product = () => {

  return (
    <div style={{
      textAlign: 'center',
      margin: 'auto',
      width: '600px'
    }} >
      {arr.map((data) =>
        <Link
          to={`/product/${data.id}`}
          key={data.id}
          style={{ backgroundColor: 'green', margin: '30px', padding: '10px', borderRadius: '20px', border: '4px solid blue', textDecoration: 'none', color: 'white' }}>
          <img
            src={data.img}
            alt="alt"
            style={{ width: '250px', border: '2px solid yellow', borderRadius: '20px' }} />
          <h2>{data.title}</h2>
        </Link>)}
    </div>
  )
}

export default Product