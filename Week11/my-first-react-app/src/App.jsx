import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx'

function App() {
  const name = "John Doe";
  const message1 = "Hey you";
  const message2 = "What's going on";

  return (
    <>
      <Header/>
      <div className='constainer' style={{fontSize: "2rem"}}>Hello! I am {name}</div>
      <h2>{message1}</h2>
      <p>{message2 + "??"}</p>
      <Footer/>
    </>
  )
}

export default App
