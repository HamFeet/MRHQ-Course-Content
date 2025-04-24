import { use, useEffect } from "react";

function Message(){

useEffect(function(){
    // Code her is ran when executed component is mounted.
    console.log("Component has been mounted");

    // Cleanup function (unmount).
    return () => {
        // Code only runs when component is removed from the DOM.
        console.log("Component unmounted!");
    } 
},[]);  //Leave empty to run only once.

    return (
    <h1>Component mounted!</h1>
    )
}

export default Message;