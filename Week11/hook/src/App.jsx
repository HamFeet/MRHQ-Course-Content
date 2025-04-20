import { useState } from 'react';
import './App.css'
import ToggleButton from './components/toggleButton';

function App() {
  // let counter = 0;
  const [counter, setCounter]=useState(0)
  const [counterTwo, setCounterTwo]=useState(100)


  function incrementByOne(){
    // counter++;
    // console.log(counter);
    return setCounter(counter + 1)
  }
  function decreaseByOne(){
    return setCounterTwo(counterTwo - 1)
  }


  return (
    <>
      <button onClick={incrementByOne}>
          count is {counter}
      </button>
      <button onClick={decreaseByOne}>
        count is {counterTwo}
      </button>
      <ToggleButton></ToggleButton>
    </>
  )
}

export default App
