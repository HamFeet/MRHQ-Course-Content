import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from './components/Axios'

function App() {

  const [loginData, setLoginData] = useState()
  const [outputResponse, setOutputResponse] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    const users = { email: e.target[0].value, password: e.target[1].value}
    setLoginData(users)
    console.log(loginData)
    }

    useEffect(() => {
      // console.log(loginData)
      if (loginData){
        fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(loginData)
        }).then((res) => {
          console.log(res.status)
          if (res.status === 200) {
            console.log("Login success")
            setOutputResponse("Login success")
          }if (res.status === 401){
            console.log("Unauthorized")
            setOutputResponse("Invalid email or password")

          }
        }).catch((err) => {
          console.log(err)
        })
      }else {
        console.log("Loading")
      }
      }, [loginData])

  return (
    <>
      <h3>Log in - Client side Rendered with React</h3> 
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input type="email" required/><br />
        <label>Password</label><br />
        <input type="password" required/><br />
        <input type="submit" /><br />
      </form>
        <label>{outputResponse}</label>
        <Axios />
    </>
  )
}

export default App
