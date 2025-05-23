"use strict"


//.then() method => Handle fullfilled (resolved) promise
//.catch() method => Handle failed (rejected) promise

// coffee.then((r) => {
//     console.log(r, "Coffee is ready☕!");
// }).catch((error) => {
//     console.log(error)
// })

// console.log(fetch("https://jsonplaceholder.typicode.com/users"
// ))

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // console.log(response.status)
//         // console.log(response.json())
//         return response.json(); // This is a promise contains the DATA
//     }).then((result) => {
//         console.log(result);
//     }).catch(error)

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
        return response.json()
    }).then((result) => {
        console.log(result.results)
    }).catch((error) =>{
        console.log(error)
    })


// async & await

// async function asyncFunction() {
//     return 1;
// }
// console.log(asyncFunction())

// const asyncFunc = async () => {
//     return 2;
// }
// console.log(asyncFunc())

// async function getUser(params) {
//     //Pause the execution, wait for the [[PromiseResullt]] return from promise
//     //Respones object🔽
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         //Pause the execution, wait for the [[PromiseResullt]] return from promise 
//         //Get the data whish is the array
//         const result = await response.json();
//         console.log("asyn function", result)
//     }catch(error){
//         console.log(error)
// }}

// getUser()

const pokemonID = document.getElementById("pokemon");
console.log(pokemonID)

async function getPokemon(params) {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const result = await response.json();
        // console.log("async function:", result.results);
        console.log(pokemonID)
        result.results.forEach((element => {
            pokemonID.innerHTML = pokemonID.innerHTML + `${element.name}`
        }));
    }catch(error){
        console.log(error)
    }
}
// getPokemon()
