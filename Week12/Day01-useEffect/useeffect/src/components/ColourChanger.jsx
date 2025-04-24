import {useState, useEffect} from "react";

function ColourChanger(){

    const [colour, setColour] = useState("pink")

function handleClick(){
    // change colour
    switch (colour) {
        case "red":
            setColour("blue")
            break;
        case "blue":
            setColour("green")
            break;
        case "green":
            setColour("orange")
            break;
        case "orange":
            setColour("yellow")
            break;
        default:
            setColour("red")
        }
    
}

useEffect(function(){
    console.log(`The colour changed to: ${colour}`)
},[colour])

    return (
        <div>
            <h1 style={{backgroundColor:colour}}>This element is going to change colour!</h1>
            <button onClick={handleClick}>Chang Colour</button>
        </div>
    )
}
export default ColourChanger;