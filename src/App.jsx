import { useState } from 'react'
import History from './pages/History'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Footer from './assets/component/Footer'
import Header from './assets/component/Header'

function App() {
  

  return (
    <>
         <Header/>
    {/* <h1>Media player</h1> */}
    <Routes>
      <Route element={<Landing/>} path='/'/>
      <Route element={<Home/>} path='/home'/>
      <Route element={<History/>} path='/history'/>
      
     
        
    </Routes>
    <Footer/>
    </>
  )
}

export default App
