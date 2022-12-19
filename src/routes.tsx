import React, { ReactElement, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

const LandingPage = lazy(async () => await import('./pages/LandingPage'))
const SearchPage = lazy(async () => await import('./pages/SearchPage'))

const AppRouter = (): ReactElement => {
  return (
    <main className='container'>
      <Router>
        <NavigationBar />
        <Suspense fallback={<p> Carregando...</p>}>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='home' element={<SearchPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  )
}

export default AppRouter
