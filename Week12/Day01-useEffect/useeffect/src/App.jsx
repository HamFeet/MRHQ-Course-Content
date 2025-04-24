import { useState, useEffect } from 'react'
import './App.css'
import Message from './components/Message'
import ColourChanger from './components/ColourChanger';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick(){
    return setIsVisible(!isVisible) 
  } 

  useEffect(function(){
    // console.log(`The element is currently set to: ${isVisible}`)
  },[handleClick])

  return (
    <>
    <hr />
    <button onClick={handleClick}>Mount</button>
    {isVisible ? <Message/> : ""}

    <ColourChanger/>
    </>
  )
}

export default App
