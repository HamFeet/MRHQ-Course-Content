import { useState } from "react"; //Import use state 

export default function ToggleButton2() { 

    const [isOn, setIsOn] = useState(true) //State handler to show if the button is on or off
    
    function handleClick() { //The function that handles the click and sets the state to the opposite of isOn
        setIsOn(!isOn);
    }

  return (
    <div>
        <button onClick={handleClick}>Toggle button2</button>
        <button onClick={() => {return (setIsOn(!isOn))}}>ToggleButton2</button> {/*Shorthand version*/}
        {isOn ? <p style={{color: "green"}}>ON ✅</p> : <p style={{color: "red"}}>OFF ❌</p>} {/*Ternary operator to change the value based in isOn */}
    </div>
  )
}
