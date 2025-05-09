const iceCreams = ["choccy", "hokipoki", "lemon"];

iceCreams.push("rainbow"); //Adds element to the end.

iceCreams.pop(); // Removes the last element.

iceCreams.shift(); // Removes the first element.

iceCreams.unshift("mint"); // Adds element to the begining.

const iceCreamSplit = "vanilly choccy matcha";
const resultIceCreamSplit = iceCreamSplit.split(" ", 3); // Splits a string and returns an array.

const joinMethod = iceCreams.join(" "); // Takes elements from arraay and creates a string.

const sliceArray = [1, 2, 3, 4, 5, 6];
const sliceResult = sliceArray.slice(2,3); // Takes the element before first and second number.

const spliceArray = [1, 2, 3, 4, 5, 6];
const spliceResult = spliceArray.splice(1, 0, "add this", "and this"); // Removes from the first number removing the second number of elements.

iceCreams.forEach(function (element, index, array){
    console.log(`${element}, icecream, please order ${index}`);
})

const originalArray = [3, 8, 12, 17, 22];
const newArray = [];

originalArray.forEach(e => newArray.push(e * 2));

const mapArray = iceCreams.map(function (icecream, index){
    return `Flavour ${index}: ${icecream}`;
})

const mapArrayDouble = originalArray.map(function(e){
    return (e * 2);
});

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterArray = array4.filter(function(e){
    return e % 2 === 0;
})

// aray.includes()
// const arrayOfThings = ["books", "pens", "paper", "pencils", "words"];
// const guess = arrayOfThings.includes("shoe");

// const userGuess = prompt("Guess!");

// const checkGuess = arrayOfThings.includes(userGuess);

const age1 = [19, 35, 35, 24, 55];
const everyAgeOver30 = age1.every(function(age, index, array){
    return age > 30;
}); // Returns true if all are true.
const someAgeOver30 = age1.some(function(age, index, array){
    return age > 30;
}); // Returns true if one matches.
console.log(everyAgeOver30);

const someString = "a mouse in a house";
const someStringSplit = someString.split(" ");
const someStringCapitalised = someStringSplit.map(function(e){
  return e[0].toUpperCase() + e.slice(1).toLowerCase();
});

const reult = someStringCapitalised.join(" ");

console.log(reult);