const pastDate1 = new Date(1995, 11, 17, 3, 24, 0)
console.log(pastDate1);

const pastDate2 = new Date("2004-10-23")
console.log(pastDate2);

const difference = pastDate2 - pastDate1 ;
const days = difference / 1000 / 86400;
console.log(days);

const myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.toISOString());

const myBirthdate = new Date(1995, 23, 8)
console.log(`My birthdate is ${myBirthdate.getDate()}`);

const myFormattedDate = new Intl.DateTimeFormat("en-NZ").format(myDate)
console.log(myFormattedDate);

const myFormattedDate1 = new Intl.DateTimeFormat("pl", {dateStyle: "full"}).format(myDate)
console.log(myFormattedDate1)

const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    year: "numeric",
    weekday: "long"
}

const myFormattedDate2 = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(myDate)
console.log(myFormattedDate1)

const myFormattedBirthday = new Intl.DateTimeFormat("en-NZ", {
    day: "numeric",
    month: "long"

}).format(myBirthdate)
console.log(myFormattedBirthday);


const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const button = document.querySelector("button");
const displayEl = document.getElementById("result");

button.addEventListener("click", function() {
    console.log(date1.value);
    console.log(date2.value);
    const dateOne = new Date(date1.value);
    const dateTwo = new Date(date2.value);

    const difference = dateTwo - dateOne ;
    const days = (difference / (1000*60*60*24));

    console.log(difference)

    displayEl.innerHTML = `The difference is ${days} days.`
})


