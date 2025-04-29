import { useState } from 'react'
import './App.css'
import ToggleButton from './components/ToggleButton'
import ToggleButton2 from './components/ToggleButton2'
import Exercise2 from './components/Exercise2'

function App() {
  const [show, setShow] = useState(false)
 
  return (
    <>
      <h1>Conditional Rendering</h1>
      <button onClick={() => {setShow(!show)}}>Show buttons</button>
      {show && <><ToggleButton/> <ToggleButton2/></>} {/*Use && when value is true to do something and do nothing when false */}
      <br />
      <Exercise2/>
      
    </>
  )
}

export default App
