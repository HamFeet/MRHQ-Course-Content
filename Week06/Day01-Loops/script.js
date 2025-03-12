// let count = 0;

// while (count <= 10){
//     console.log(`The count is: ${count}`);
//     count++;
// }

// const numberArray = [7, 13, 26, 49, 55];

// let num = 0;
// let total = 0;

// while (num < numberArray.length){
//     // console.log(numberArray[num])
//     console.log(`The total ${total} + the number ${numberArray[num]} = `);
//     total = numberArray[num] + total;
//     console.log(total);
//     num++;
// }

// let x = 0;

// while (true){
//     if (x === 3){
//         console.log("X is 3");
//     }if (x === 10){
//         console.log("X is 10");
//     }if (x === 15){
//         console.log("X is 15... Goodbye");
//         break;
//     }
//     console.log(x);
//     x++;
// }

// let string = "H!ell@o#Wo$rld";
// let x = 0;

// console.log(string.length);

// while(x < string.length){
//     if (string[x] === '!' || string[x] === '@' || string[x] === "#"){
//         continue;
//     } else {
//         console.log(string[x]);
//     }
//     x++;
// }

// const user = {
//     name: "John",
//     age: 50,
//     isAdmin: true,
// };

// for (info in user){
//     if (info === "age"){
//         console.log(user[info]);
//     }
// };

const myFavNumbers = {
    23: "My Birthday",
    27: "House number",
    29: "My Age",
};

let total;

for (num in myFavNumbers){
    total += num;
};

console.log(total);
