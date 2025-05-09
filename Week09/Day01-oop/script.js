// // Primative / Safe to copy.
// let a = 10;
// let b = a;
// b = 20;
// console.log(a,b);

// // Non - Primative = Shared reference - Changes affect the original.
// let arr1 = [1,2];
// let arr2 = [arr1];
// arr2.push(3);
// console.log(arr1, arr2);

// // Safer way tp copy array - Spread operator
// let newArr = [...arr1];
// console.log(newArr);
// newArr.push(4);
// console.log(newArr, arr1); // Doesn't effect the original object.

// // Works with ojects 
// let obj1 = {
//     name: "Jim",
//     age: 30
// }
// let copiedObj = {...obj1};
// console.log(obj1, copiedObj);

// // Execution contexts

// let temp = "Scaler";
// console.log(temp);

// // Call stack

// function func1() {
//     console.log("in function1"); // Step 2
//     func2() // Step 3
//     console.log("out function1"); // Step 6
// }
// function func2() {
//     console.log("in function2"); // Step 4
//     console.log("out function2"); // Step 5
// }

// func1() // Step 1

// const person = {
//     name: "Alice",
//     sayName: function (){
//         console.log(this.name);
//     }
// }

// console.log(person.sayName())

// //  Exercise for "this"
// function greet(){
//     console.log(this);
//     console.log(`Hello ${this.firstName} ${this.lastName}`)
// }
// greet()

// const person1 = {
//     firstName: "John",
//     lastName: "Daly",
//     hello: greet,
// }
// person1.hello();

// OOP - Classes

// class User {
//     constructor(prop1, prop2, prop3){
//         this.firstName = prop1;
//         this.lastName = prop2;
//         this.age = prop3
//     }
// }
// const user1 = new User("John", "Daly", 33);
// console.log(user1);
// console.log(user1.firstName, user1.lastName);

// const user2 = new User("James", "Blunt", 66);
// console.log(user2);
// console.log(user2.firstName, user2.lastName);

// // Create a method inside a class

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         // Create a method inside the constructor 
//         this.sayHi = function(){
//             console.log(this.name + " Says Hi");
//         }
//     }
//     // Create a method outsode the constructor
//     greet(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// const personOne = new Person("Jeff" , 21);
// personOne.sayHi();
// personOne.greet();

// class Vehicle {
//     constructor(make, manufacturer, year, colour){
//         this.make = make;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.colour = colour;
//         this.showCar = function(){
//             console.log(`Your car is a ${manufacturer} ${make} made in the year ${year} painted ${colour}`)
//         }
//     }
// }

// const myCar = new Vehicle("Cooper", "Mini", 1986, "red");

// myCar.showCar();

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound.`)
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}

const genericAnimal = new Animal("Generic");
genericAnimal.speak();
const myDog = new Dog("Archie", "Springer");
myDog.speak();