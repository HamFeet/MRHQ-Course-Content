import { useState, useEffect } from "react"

useState
function App() {

  const[weatherData, setWeatherData] = useState("")
  const[userEnteredCity, setUserEnteredCity] = useState("")
  const[currentCity, setCurrentCity] = useState("Hull")

  const url = `http://api.weatherapi.com/v1/current.json?key=f30fc1dbbdaf4888a9e61438250805&q=${currentCity}&aqi=no`

  // function fetchData() {
  //   fetch(url)
  //     .then((response) => {
  //         // console.log(response)
  //         return response.json()
  //     }).then((result) => {
  //       console.log(result)
  //       console.log(result.location.name)
  //       console.log(result.current.temp_c)
  //       setTemp(result.current.temp_c)
  //       setLocation(result.location.name)
  //       setWeatherType(result.current.condition.text)
  //       setWeatherIcon(result.current.condition.icon)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }

  const handleUserInput = (e) => {
    // get the user input value
    // console.log(e.target.value)
    return setUserEnteredCity(e.target.value)
  }
  const handleClick = () => {
    // get the inpt value and then send request
    return setCurrentCity(userEnteredCity)
  }
  async function getLocation() {
    try{
      const response = await fetch(url)
      const result = await response.json();
      return setWeatherData(result)
    }catch(error){
      console.log(error)
    }
  }

  // Use effect, as long as currentCity is updated I will run this function.
  // useEffect(() => {
  //   fetch(url).then((response => response.json()))
  //   .then(result => {
  //     return setWeatherData(result)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })},[currentCity])

    getLocation()
   

  return (
    <>
      <h1>Weather App</h1>
      <label>Enter your city!</label>
      <input onChange={handleUserInput} required></input>
      <button onClick={handleClick}>Search!</button>
      {weatherData && //Will only run if weatherData truthy
      <div>
        <p>In {weatherData.location.name}.</p>
        <p>The Temp is {weatherData.current.temp_c}c.</p>
        <p>It's {weatherData.current.condition.text}.</p>
        <img src={weatherData.current.condition.icon}/>
      </div>}
    </>
  )
}

export default App
