import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieState from './context/MovieState.jsx'

createRoot(document.getElementById('root')).render(
  <MovieState>
    <App />
  </MovieState>,
)
