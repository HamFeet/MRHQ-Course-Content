import { useState } from "react"

export default function CounterAddOne(props) {

  return (
    <div>
        <div>Count: {props.countDisplay}</div>
        <button onClick={props.addCount}>ADD ONE</button>
    </div>
  )
}
