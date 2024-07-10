import React, { useContext } from 'react'
import Block from './Block'
import MoneyContext from '../context/MoneyContext'
const District = ({money}) => {
  const data = useContext(MoneyContext)
  return (
    <div>
      <h1>These is Distrcit = {data.component}</h1>
      <Block money={money} />
    </div>
  )
}

export default District