import React from 'react'
import Product from './components/Product';
import Superman from './components/Superman';
import Ironman from './components/Ironman';
import Thor from './components/Thor';
import Batman from './components/Batman';
const App = () => {
  return (
    <div>
      <Superman />
      <Batman />
      <Thor />
      <Ironman />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default App;