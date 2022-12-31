import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'
import './index.css'
import { UserAuthContextProvider } from './common/contexts/UserAuthContext'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router />
    </UserAuthContextProvider>
  </React.StrictMode>
)
