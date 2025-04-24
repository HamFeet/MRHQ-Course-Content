import React from "react";

const ArrowFunction = () => {

    // Use of arrow functions in React components.
    const handleClick = () => {
        console.log("Button clicked");
    }

    return (
        <div>
            <h1>ArrowFunction</h1>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={()=>{console.log("Button 2 got clicked.")}}>Click me 2!</button>

        </div>
    )
}

export default ArrowFunction;