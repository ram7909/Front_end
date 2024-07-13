import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import VideoDetail from './components/VideoDetail'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:videodetail' element={<VideoDetail />}/>
      </Routes>
    </Router>
  )
}

export default App