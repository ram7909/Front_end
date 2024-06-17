import React from 'react'

const Movie = ({ imgsrc, name, actor, release, budget }) => {
    return (
        <>
        <div className="m" style={{display:'flex',
                alignItems:"center",
                justifyContent:'center',
                fontFamily:'Poppins, sans-serif'}}>
            <div className="main" style={{
                display:'flex',
                justifyContent:'center',
                gap:'30px',
                width:'60%',
                backgroundColor:'grey',
                color:'black',
                padding:'20px',
                borderRadius:'10px',
                border:'2px solid yellow'
            }}>
                <div className="img">
                    <img src={imgsrc} alt="" style={{borderRadius:'10px'}} />
                </div>
                <div className="data">
                    <h1>Movie Name : {name}</h1>
                    <h3>Actor Name : {actor}</h3>
                    <h4>Release Date : {release}</h4>
                    <h4>Budget : {budget}</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default Movie