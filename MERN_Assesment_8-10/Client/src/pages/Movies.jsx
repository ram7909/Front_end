import React from 'react'
import MovieContext from '../context/MovieContext'
import { useContext } from 'react'
const Movies = () => {
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className='container text-center'>
                <div className="row my-5">
                  {movie.map((e)=> <div className='col-md-4' key={e._id}>
                <div className="card bg-dark text-light my-3" style={{
                    width:'18rem',
                    border:"2px solid yellow"
                    }}>
                    <img src={e.posterLink} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text"><b>Actor : </b>{e.actor}</p>
                            <p className="card-text"><b>IMDB Rating : </b>{e.imdbRating}</p>
                            <p className="card-text"><b>Release Date : </b>{e.releaseDate}</p>
                        </div>
                </div>
                </div>)}  
                </div>
                
            </div>
        </>
    )
}

export default Movies