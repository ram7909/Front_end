import React from 'react'
import { useParams } from 'react-router-dom'
import { arr } from '../../data'
const Product_Detail = () => {
    const {id} = useParams()
    const filterData= arr.filter((data)=>data.id == id)
    console.log("Filtered Data =",filterData);
  return (
    <div style={{textAlign: 'center',
        margin: 'auto',
        width: '600px'}}>
        <img src={filterData[0].img} alt="" style={{ width: '250px', border: '2px solid yellow', borderRadius: '20px' }} />
        <h1>{filterData[0].title}</h1>
        <p>{filterData[0].des}</p>
    </div>
  )
}

export default Product_Detail