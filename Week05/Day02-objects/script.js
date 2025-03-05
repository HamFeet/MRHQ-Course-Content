const cat = {
    firstName: 'Purr',
    lastName:'Machine',
    favouriteColour: "Red",
    likes: "Cat nip",
    favouriteFood: "The dogs"
}

console.log(`This is ${cat.firstName} ${cat.lastName} and their favourite food is ${cat.favouriteFood}.`);

const rectangle = {
    length: 10,
    width: 50
}

console.log(`The area of the rectanlge is ${(rectangle["length"] * rectangle["width"])}`);

const newPerson = {
    firstName: "Joshua",
    lastName: "Feetham",
    favouriteNumber: 23,
    favouriteDay: "Saturday"
}

console.log(newPerson);

newPerson.favouriteFood = "Gyros";

console.log(newPerson);

delete newPerson.favouriteDay; 
delete newPerson.favouriteNumber;

console.log(newPerson);
