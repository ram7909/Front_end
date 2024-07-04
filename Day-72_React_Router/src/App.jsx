import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Admin from './components/Admin'
import Profile from './components/Profile'
const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />
        <Route path='/profile' element={<Profile name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}  />} />
        <Route path='/admin' element={<Admin name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}  />} />
      </Routes>
    </Router>
  )
}

export default App