import { useState, useEffect } from "react"

export default function InputComponent(props) {



  return (
    <div>
        <input type="text" onChange={props.handleUserInput} value={props.inputValue}></input>
    </div>
  )
}
