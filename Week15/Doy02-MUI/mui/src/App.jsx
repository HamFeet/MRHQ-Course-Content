import { useState } from 'react'
import Button from "@mui/material/Button"

function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
    <Button fullWidth onClick={handleClick} variant="contained" color="warning" >Contained</Button>

    </>
  )
}

export default App
