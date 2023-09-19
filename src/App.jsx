import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

function App() {

  return (
    < >
    <Navbar/>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path='/Signin' element={<SignIn />} />

    </Routes>
      
    </>
  )
}

export default App
