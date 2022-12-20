import React, { ReactElement, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const LandingPage = lazy(async () => await import('./pages/LandingPage'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))
const AddCampground = lazy(async () => await import('./pages/AddCampground'))
const AddNewComment = lazy(async () => await import('./pages/AddNewComment'))
const SignUpPage = lazy(async () => await import('./pages/SignUpPage'))
const SignInPage = lazy(async () => await import('./pages/SignInPage'))

const AppRouter = (): ReactElement => {
  return (
    <main className='container'>
      <Router>
        <NavigationBar />
        <Suspense fallback={<p> Carregando...</p>}>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='home' element={<SearchPage />} />
            <Route path='add-campground' element={<AddCampground />} />
            <Route path='add-comment' element={<AddNewComment />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='sign-in' element={<SignInPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter
