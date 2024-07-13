import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [ids, setIds] = useState('');
    console.log(ids);
    return (
        <>
            <div className="nav_Bar bg-dark text-light">
                <div className="container">
                    <Link to={'/'} className="left"><h3><span id='yt'>MY</span> Youtube</h3></Link>
                    <div className="right">
                        <input type="search" placeholder='Enter Channel ID' value={ids} onChange={(e)=>setIds(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
