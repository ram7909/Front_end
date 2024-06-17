import React from 'react'
import { useState } from 'react'

const Use = () => {
  const [name, setName] = useState("Superman")

    const changeName = ()=>{
        setName("Spiderman")
    }
  return (
    <> 
    <div className="txt" style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontFamily:'Poppins, sans-serif'
    }}>

      <h1>{name}</h1>
    </div>
    <div className="btn" style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontFamily:'Poppins, sans-serif',
    }}>

        <button onClick={changeName} style={{padding:'8px 10px',fontFamily:'Poppins, sans-serif',backgroundColor:'yellow',border:'none',borderRadius:'5px'}}>Change</button>
    </div>
    </>
  )
}

export default Use