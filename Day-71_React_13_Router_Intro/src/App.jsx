import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Team from './pages/Teams'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App