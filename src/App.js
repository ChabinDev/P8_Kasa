import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
        <Route path="/" exact element={<Home />} />
        <Route path="/logement/:id" exact element={<Logement />} />
        <Route path="/a_propos" exact element={<Apropos />} />
        <Route path="404" exact element={<Error />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
