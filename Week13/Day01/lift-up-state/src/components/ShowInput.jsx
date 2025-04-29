import React from 'react'

export default function ShowInput(props) {
  return (
    <div>
        <p>This is the ShowInput Component:</p>
        <br />
        <p>Text: {props.userInput}</p>
    </div>
  )
}
