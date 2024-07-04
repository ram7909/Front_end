import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Admin from './components/Admin'
import Profile from './components/Profile'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App