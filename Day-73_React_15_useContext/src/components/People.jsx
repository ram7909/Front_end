import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'
const People = () => {
  // console.log(useContext(MoneyContext));
  const data = useContext(MoneyContext)
  return (
    <div>
      <h1>Name = {data.name}</h1>
      <h2>Money = {data.money}</h2>
      <h3>Bank Balance = {data.bankBalance}</h3>
      <h1>counter = {data.counter}</h1>
      <button onClick={()=>data.setCounter(data.counter+1)}>Increase</button>
      <button onClick={()=>data.setCounter(data.counter-1)}>Decrease</button>
    </div>
  )
}

export default People