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
        <Route path="/P8_Kasa" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/P8_Kasa/a_propos" element={<Apropos />} />
<<<<<<< HEAD
        <Route path="*" element={<Error />} />
=======
        <Route path="*/*" element={<Error />} />
>>>>>>> 1a8dfac9f55c05fee8fe8116ba6d7ef37fbce386
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
