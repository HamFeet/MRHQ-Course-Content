"use strict";

// console.log(Math.max(5, 3, 7));//7
// console.log(Math.min(5, 3, 7));//3
// console.log(Math.abs(-25));//25
// console.log(Math.floor(5.9));//5
// console.log(Math.ceil(5.1));//6
// console.log(Math.round(5.5));//6

// let myNum = (1.3567).toFixed(2);//1.35

// Math.pow(3,4)// 3*3*3*3

let faveNums = [23, 27, 12];

let smallestNum = Math.min(...faveNums);
console.log(Math.min(smallestNum));
let largestNum = (Math.max(...faveNums));
console.log(largestNum);

const randomNumber = Math.random();
// console.log(Math.ceil(randomNumber * 100))

let fruits = ["🍇", "🍉", "🍌", "🍋", "🍐", "🍎"];
let randomRange = Math.floor(randomNumber * fruits.length);
console.log(fruits[randomRange])