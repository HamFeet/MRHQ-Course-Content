// function birthdayInfo(month) {
//     console.log(`Your birth month is ${month}`);
// } 

// birthdayInfo("August");

// function milkshakeBlender(food1, food2){
//     console.log(`I had ${food1} and ${food2} in my shake.`);
// };

// milkshakeBlender("whiskey", "coke");

// function stringChecker (string){
//     if (string){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(stringChecker("  "));

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     greeting: function (name){
//         console.log(`Hi ${name}, the weather is good.`);
//     },
// }

// function printNameFromObject(obj){
//     console.log(obj);
// }

// printNameFromObject(person);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA",
//     },
// }

// function displayPersonalDetails(){
//     let isOfAge;
//     if (person.age >= 18){
//         isOfAge = "is an adult."
//     }else {
//         isOfAge = "is not a adult."
//     }
//     console.log(`Full Name: ${person.firstName} ${person.lastName}`);
//     console.log(`Age: ${person.age}`);
//     console.log(`Status: ${person.firstName} ${isOfAge}`)
//     console.log(`Location: ${person.address.city} ${person.address.country}`)
//     console.log(`Greeting: Hello ${person.firstName}! Welcome to the system.`)
// }

// displayPersonalDetails()

// let answer = prompt("What is your favourite colour?");

// if (!answer){
//     alert("No answer deteced!");
// }else{
//     alert(`Your favourite colour is ${answer}`);
// }

// Ask user for a message and remove the whitspace.
let userMessage = prompt("What is your message?").trim();

//Check the length of the message and repond.
if (userMessage.length <=10){
    alert(userMessage.toUpperCase())
}else{
    alert(userMessage.toLowerCase());
}
