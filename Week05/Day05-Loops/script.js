// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// let word = "Responsiveness";

// for (num = 0; num < word.length; num++){
//     console.log(word[num]);
// }

// const foods = ["salad", "pie", "pickles", "scones"];

// for (num = 0; num < foods.length; num++){
//     console.log(`I like ${foods[num]}`)
// }

// for (food of foods){
//     console.log(food);
// }

// let userAge = prompt();

// if (userAge >= "18"){
//     console.log("Please vote");
// }

let userGuess;
let answer = 3;

while (userGuess != answer){
    userGuess = prompt("Guess a number between 1 - 5");
    if (userGuess == answer){
        console.log("Your guess is correct!");
    }else {
        userGuess = prompt(`You guessed ${userGuess} that is wrong. Press enter to carry on!`);
    }
}