import { useState, useEffect } from 'react'
import './App.css'
import InputComponent from './components/InputComponent'
import ShowInput from './components/ShowInput'
import CounterAddOne from './components/CounterAddOne'
import CounterMinusOne from './components/CounterMinusOne'

function App() {

  const[val, setVal] = useState("")

  const handleChange = (e) => setVal(e.target.value)

  useEffect(() => {
      console.log(val)
  }, [val])

  const [count, setCount] = useState(0)
  const updateCountMinus = () => setCount(count - 1);
  const updateCountAdd = () => setCount(count + 1);

  return (
    <>
      <InputComponent 
        inputValue={val} 
        handleUserInput={handleChange}
        />
      <ShowInput userInput={val}/>
      <CounterAddOne countDisplay={count} addCount={updateCountAdd}/>
      <CounterMinusOne countDisplay={count} minusCount={updateCountMinus}/>
    </>
  )
}

export default App
