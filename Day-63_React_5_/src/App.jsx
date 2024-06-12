import React from 'react'
import { useState } from 'react';

const App = () => {
  //Hooks
  const [counter, setCounter] = useState(0);

  const increase = ()=>{
    // counter++;
    console.log(counter);
  }

  const decrease = ()=>{
    // counter--;
    console.log(counter);
  }
  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App