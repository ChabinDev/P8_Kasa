import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/logement/:id" exact element={<Logement />} />
        <Route path="/a_propos" exact element={<Apropos />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
