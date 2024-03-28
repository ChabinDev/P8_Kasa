import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/P8_Kasa" exact element={<Home />} />
        <Route path="/logement/:id" exact element={<Logement />} />
        <Route path="/P8_Kasa/a_propos" exact element={<Apropos />} />
        <Route path="404" exact element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
