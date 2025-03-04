// console.log("Hello world");

// Conditionals If / Else / Else if

let total = 1;

if (total == 1){
    console.log("Total is positive.");
}else {
    console.log("Total is negative.");
}

const myString = "1 apple";

if (myString[0] === "a"){
    console.log("True.");
}else{
    console.log("False.");
}

myString[0] === "a" ? console.log(true) : console.log(false);

const word = "hippopotamus";

word.length > 10 ? console.log("the word is long.") : console.log("The word is short.")

let coupon = true;
let premium = true;
let userAge = 65;

userAge >= 65 && (premium === true || coupon === true) ? console.log("You are eligible.") : console.log("You are not eligible.");

const dayOfWeek = "Sunday";
let isWorkDay = false;

switch (dayOfWeek){

    case "Monday":
        console.log("The day is Monday");
        isWorkDay = true;
        break;

    case "Tuesday":
        console.log("The day is Tuesday");
        isWorkDay = true;
        break;
    case "Wednesday":
        console.log("The day is Wednesday");
        isWorkDay = true;
        break;

    case "Thursday":
        console.log("The day is Thursday");
        isWorkDay = true;
        break;

    case "Friday":
        console.log("The day is Friday");
        isWorkDay = true;
        break;

    case "Saturday":
        console.log("The day is Saturday");
        isWorkDay = false;
        break;

    case "Sunday":
        console.log("The day is Sunday");
        isWorkDay = false;
        break;
   
    default:
        console.log("The day does not exist");
}

let grade = 90;

switch (true){
    case grade >= 90:
        console.log("You got a A");
        break;
    case (grade >= 80):
        console.log("Your grade is a B");
        break;
    case (grade >= 70):
        console.log("Your grade is a C");
        break;
    case (grade >= 60):
        console.log("Your grade is a D");
        break;
    default:
        console.log("Your grade is a F");
        break;
}

// • Write a variable that hold the numerical grade. Using switch(true) 
// to console.log the letter grade using the following scale:
//  • A: 90-100
//  • B: 80-89
//  • C: 70-79
//  • D: 60-69
//  • F: 0-59
//  • e.g. If my numerical grade is 55, then I got "F" in the console.