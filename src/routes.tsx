import type { FC } from 'react'
import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { auth } from './config/firebase'
import { UserAuthContextProvider } from './common/contexts/UserAuthContext'
import routes from './_routes'
import { onAuthStateChanged } from 'firebase/auth'

const AppRouter: FC = () => {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        console.log('No user detected')
        setLoggedIn(false)
        localStorage.setItem('user', '')
      } else {
        console.log('User detected.')
        setLoggedIn(true)
        localStorage.setItem('user', JSON.stringify(user))
      }

      setLoading(false)
    })
  }, [])

  return (
    <main>
      <UserAuthContextProvider loggedIn={loggedIn}>
        <Router>
          <NavigationBar />
          <Suspense fallback={loading && <p> Carregando...</p>}>
            <Routes>
              {routes.map((route, index) =>
                <Route
                  key={index}
                  path={route.path}
                  element ={
                    (route.protected)
                      ? <ProtectedRoute ><route.component /></ProtectedRoute>
                      : <route.component />
                  }

                />
              )}
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </UserAuthContextProvider>
    </main>
  )
}

export default AppRouter
