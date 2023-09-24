import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Creators from './pages/Creators'
import Editors from './pages/Editors'
import Upload from './components/CreatorsComponents.jsx/Upload'


function App() {

  return (
    < >
    <Navbar/>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path='/Signup' element={<SignUp />} />
        <Route path='/creators' element={<Creators />} >
           
          <Route path='/creators/upload' element={<Upload/>} />
        </Route>
        <Route path='/editors' element={<Editors/>}>


        </Route>
        


    </Routes>
      
    </>
  )
}

export default App
