import { useState } from "react";

function ToggleButton(){

const[isOn, setIsOn]=useState(true)

function handleClick(){
    return setIsOn(!isOn)
}

    return (
        <>
        <button onClick={handleClick}>
            {isOn ? "ON" : "OFF"}
        </button>
        </>
    )
}
export default ToggleButton;