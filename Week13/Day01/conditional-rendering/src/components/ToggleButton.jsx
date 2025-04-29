import { useState } from "react"; //Import use state 

export default function ToggleButton() { 

    const [isOn, setIsOn] = useState(true) //State handler to show if the button is on or off
    
    function handleClick() { //The function that handles the click and sets the state to the opposite of isOn
        setIsOn(!isOn);
    }

  return (
    <div>
        <button onClick={handleClick}>Toggle button</button>
        <button onClick={() => {return (setIsOn(!isOn))}}>ToggleButton</button> {/*Shorthand version*/}
        {isOn ? <p>Hi</p> : ""} {/*Ternary operator to change the value based in isOn */}
    </div>
  )
}
