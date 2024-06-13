import React from 'react'
import { useState } from 'react'
import Product from './Product';

//Hooks
//useState, useEffect, useContext, [useParams, useNavigate, useLocation], [useSelector, useDispatch]

const App = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);
  
  const increase = ()=>{
    setCounter(counter+1);
    // counter++;
    console.log(counter);
  }
  const decrease = ()=>{
    setCounter(counter-1);
    // counter--;
    console.log(counter);
  }
  return (
    <>
      {/* <h1>counter = {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button> */}

      <Product />
    </>
  )
}

export default App