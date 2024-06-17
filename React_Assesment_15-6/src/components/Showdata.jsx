import React from 'react'

const Showdata = (props) => {
    
    return (
        <>
            {props?.item?.map((data)=>
                <div key={Math.random()}>
                    <h1>{data.title}</h1>
                </div>
            )}
        </>
    )
}

export default Showdata