import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Carrer = () => {
  const navigate = useNavigate()
  return (
    <div>Carrer
      <button onClick={()=>navigate('/team')}>Go to Team</button>
    </div>
  )
}

export default Carrer