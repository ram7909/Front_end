import React from 'react'
import './Movie.css'
const movie = {
    title: 'Chacha Vidhayak Hain Humare',
    description: 'Ashwini Pathak threatens Ronny that he must quit politics or else his family and friends will come under attack. Ronny uses the opportunity to negotiate a secret bargain to garner favors for his friends.',
    language: 'Hindi',
    imgsrc: 'https://m.media-amazon.com/images/S/pv-target-images/b2322e7b22d1821d81455bafcd1672805cc2fe0a25fe5e3942d0b1822bcba43a.__SX990__SY558__QL60__._TTW_.jpg'
}

const Movie = () => {
    return (
        <div className="main">

            <div className='movie'>
                <div className="item">
                    <h1>{movie.title}</h1>
                    <h3>{movie.language}</h3>
                    <h5>{movie.description}</h5>
                </div>
                <img src={movie.imgsrc} alt="" />
            </div>
        </div>
    )
}

export default Movie