// document.body.innerHTML = "<h1>Helllo World</h1?>";
// document.body.style.background = "red";

// function changeColour(){
//     if (document.getElementById("btn").style.backgroundColor == "pink"){
//         document.getElementById("btn").style.backgroundColor = "white";
//     }else {
//         document.getElementById("btn").style.backgroundColor = "pink";
//     }
// }

// let colours = ["red", "blue", "green", "yellow"];
// let count = 0;

// function changeRandomColour(){
//     if (count > colours.length - 1){
//         count = 0;
//         document.body.style.backgroundColor = colours[count];
//     }
//     document.body.style.backgroundColor = colours[count];
//     count++;
//     console.log(count)
// }

// document.getElementById("h1-id").style.backgroundColor = "pink";
// document.getElementsByClassName("h1-class").style.font = "blue";


let count= 0;

function addOne(){
    count ++;
    console.log(count);
    document.querySelector("#counterNum").innerHTML = count;
}