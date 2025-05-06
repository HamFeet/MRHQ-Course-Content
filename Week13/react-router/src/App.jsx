import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import './App.css'
// Pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'
import Book from './pages/Book'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Users/:id' element={<Users/>}/>
        <Route path='/Book/:id' element={<Book/>}/>
    </Routes>
    </>
  )
}About

export default App
