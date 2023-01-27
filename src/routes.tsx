import React, { FunctionComponent, lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { auth } from './config/firebase'
import { UserAuthContextProvider } from './common/contexts/UserAuthContext'

const LandingPage = lazy(async () => await import('./pages/LandingPage'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))
const AddCampground = lazy(async () => await import('./pages/AddCampground'))
const AddNewComment = lazy(async () => await import('./pages/AddNewComment'))
const SignUpPage = lazy(async () => await import('./pages/SignUpPage'))
const SignInPage = lazy(async () => await import('./pages/SignInPage'))

const AppRouter: FunctionComponent = () => {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user === null) {
        console.log('No user detected')
        setLoggedIn(false)
      } else {
        console.log('User detected.')
        setLoggedIn(true)
        localStorage.setItem('user', JSON.stringify({
          email: user.email,
          emailVerified: false,
          // uid: user.uid,
          providerData: user.providerData
        }))
      }

      setLoading(false)
    })
  }, [])

  return (
    <main className='container'>
      <UserAuthContextProvider>
        <Router>
          <NavigationBar loggedIn={loggedIn}/>
          <Suspense fallback={loading && <p> Carregando...</p>}>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path='camps' element={<SearchPage />} />
              <Route
                path='add-campground'
                element={
                  <ProtectedRoute>
                    <AddCampground />
                  </ProtectedRoute>}
              />
              <Route
                path='add-comment'
                element={
                  <ProtectedRoute>
                    <AddNewComment />
                  </ProtectedRoute>}
              />
              <Route path='sign-up' element={<SignUpPage />} />
              <Route path='sign-in' element={<SignInPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </UserAuthContextProvider>
    </main>
  )
}

export default AppRouter
