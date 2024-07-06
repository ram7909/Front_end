import React from 'react'
import './Navbar.css'
import { data } from './data'
const Navbar = ({pdata,setPdata}) => {
    const filterByPrice = (price)=>{
        const newPrice = data.filter((dt)=> dt.price >= price)
        setPdata(newPrice)
    }
    const filterByCate = (category) =>{
        const newCategory = data.filter((dt)=> dt.category == category)
        setPdata(newCategory)
    }
    return (
        <>
            <div className="navbars">
                <div className="container">
                    <button type="button" className="btn" onClick={()=>filterByCate('')}>No Filter</button>
                    <button type="button" className="btn" onClick={()=>filterByCate('mobile')}>Mobile</button>
                    <button type="button" className="btn" onClick={()=>filterByCate('tablet')}>Tablet</button>
                    <button type="button" className="btn" onClick={()=>filterByCate('laptop')}>Laptop</button>
                    <button type="button" className="btn" onClick={()=>filterByPrice(19999)}>&gt;=19,999</button>
                    <button type="button" className="btn" onClick={()=>filterByPrice(49999)}>&gt;=49,999</button>
                    <button type="button" className="btn" onClick={()=>filterByPrice(99999)}>&gt;=99,999</button>
                </div>
            </div>
            {pdata.map((e) => <div key={e.id}>
                <div className="container">
                    <div className="card bg-dark text-light" style={{ width: '19rem' }}>
                        <div className="img">
                            <img src={e.imgSrc} className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.description}</p>
                            <div>
                                <button type="button" className="btn btn-primary">{e.price}/-</button>
                                <button type="button" className="btn btn-warning">Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>)}
        </>
    )
}

export default Navbar