import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="head">
                <div className="left">Quik.Buy</div>
                <div className="mid">
                    <input type="search" placeholder='search' />
                </div>
                <Link to={'/cart'} className="right">
                    <button type="button" className="btn btn-primary position-relative">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Header