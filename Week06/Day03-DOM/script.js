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


// // let count= 0;

// // function addOne(){
// //     count ++;
// //     console.log(count);
// //     document.querySelector("#counterNum").innerHTML = count;
// // }

// const myDiv = document.getElementById("divId");

// myDiv.addEventListener("mouseover", function(){
//     myDiv.style.background = "blue";
// });


// myDiv.addEventListener("mouseout", changeYellow)

// function changeYellow(event){
//     event.target.style.background = "yellow";
//     // console.log(event);
//     console.log(event.target);
// }

// const inputEl = document.querySelector("input");
// // let counter = document.getElementById("counter");

// function logValue(event){
//     console.log(event.target.value);
// }
// function logValueCount(event){
//     let total = event.target.value.length;
//     console.log(event.target.value.length);
//     counter.innerHTML = total;
// }

// inputEl.addEventListener("input", logValueCount);

// Exercise 3
 
let numOne = document.getElementById("input1");
let numTwo = document.getElementById("input2");
const counter = document.getElementById("counter");
const sumButton = document.getElementById("sum");

// numOne.addEventListener("input", sum);



function sum(event){
    counter.textContent = `${numOne.value} + ${numTwo.value} = ${+numOne.value + +numTwo.value}`;
}

sumButton.addEventListener("click", sum);
