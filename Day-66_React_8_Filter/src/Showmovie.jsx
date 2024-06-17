import React from 'react'
import { movies } from './Data'
const Showmovie = ({ movieData,setMovieData }) => {

    const filterByCategory = (category) =>{
        const newMovie = movies.filter((data)=>data.category == category);
        // console.log(newMovie);
        setMovieData(newMovie)
    }
    
    return (
        <>
            <div style={{
                textAlign:'center',
                padding:'10px',
            }}>
                <button onClick={()=>filterByCategory('Drama')}>Drama</button>
                <button onClick={()=>filterByCategory('Crime')}>Crime</button>
                <button onClick={()=>filterByCategory('Action')}>Action</button>
                <button onClick={()=>filterByCategory('Fantasy')}>Fantasy</button>
                <button onClick={()=>filterByCategory('Biography')}>Biography</button>
            </div>
            <div>
                {movieData?.map((data) => <div key={data.id} style={{
                    backgroundColor: "brown",
                    textAlign: 'center',
                    margin: '10px',
                    padding: '20px',
                    border: '2px solid yellow',
                    borderRadius: '10px'
                }}>
                    <h1>{data.category}</h1>
                    <h2>{data.movieName}</h2>
                    <h4>{data.description}</h4>
                    <h3>{data.releaseDate}</h3>
                    <h2>{data.imdbRating}</h2>
                </div>)}
            </div>
        </>
    )
}

export default Showmovie