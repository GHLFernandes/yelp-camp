import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
)
