import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Home from './pages/Home'
import { data } from './data'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
const App = () => {
  const [pdata, setPdata] = useState([...data])
  const [cart, setCart] = useState([])
  console.log("my cart = ",cart);
  return (
    <Router>
      <Header />
      <Navbar pdata={pdata} setPdata={setPdata} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
   
  )
}

export default App