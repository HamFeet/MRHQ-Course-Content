import { useState } from "react"

export default function CounterMinusOne(props) {


  return (
    <div>
        <div>Count: {props.countDisplay}</div>
        <button onClick={props.minusCount}>MINUS ONE</button>
    </div>
  )
}
