"use strict"
const display = document.getElementById("display-section")

//Turn JS Obj into JSON (STRING)
const theObj = {name:"John", age:30}
const jsonData = JSON.stringify(theObj)
console.log(jsonData, typeof jsonData);

//Unpack JSON into a JS Obj
const objData = JSON.parse(jsonData)
console.log(objData, typeof objData)


    // .then((response) => response.json())

    function fetchData() {
        fetch("https://reqres.in/api/users", {
            headers: {
                "x-api-key":"reqres-free-v1",
            },
        }).then((result) => {
            // console.log(result)
            return result.json()
        }).then((data) => {
            console.log(data.data)
        })
    }

    function fetchDataAndDisplay() {   //Function that 
        fetch("https://reqres.in/api/users", { //Gets te data from this end point
            headers: {
                "x-api-key":"reqres-free-v1", //Using th following key value for the API key
            },
        }).then((response) => { //Get a response
            console.log(response) 
            return response.json() //Returns it 
        }).then((result) => {
            console.log(result.data)
            // display.innerHTML = JSON.stringify(result.data)
            result.data.forEach((element, index) => { //For us to loop through it 
                display.innerHTML = display.innerHTML + `<li><img src=${element.avatar}> ${element.first_name} ${element.last_name}</li>` //And display it in the web page
            });
        })
    }
