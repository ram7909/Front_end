import React, { useState } from 'react'
import MoneyContext from './MoneyContext'
const MoneyState = (props) => {
  const money = 50000;
  const bankBalance = 100000;
  const name = 'superman'
  const [counter, setCounter] = useState(0);
  const component = "district"
  return (
    <MoneyContext.Provider value={{money,bankBalance,name,counter,setCounter,component}}>
      {props.children}
    </MoneyContext.Provider>
  )
}

export default MoneyState