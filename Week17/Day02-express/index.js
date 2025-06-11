//Imports the express package
const express = require("express");
const customer = require("./customer");
require("dotenv").config(); //The config is for the route of the file
const customerData = require("./customer.js")

//Create an instance of Express
const app = express();
// console.log(process.env.PORT)

const userList = [
    {name: "John", age: 27},
    {name: "Mary", age: 22},
    {name: "Ethan", age: 17},
    {name: "Joe", age: 53},
    {name: "Amelia", age: 87},
    {name: "Adam", age: 34},
];


//Create a route handler
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/api/about", (req, res) => {
    res.send("My name is josh.")
})
app.get("/api/contact", (req, res) => {
    res.send("Contact me on 09090909")
})
//Use json to send a object
app.get("/api/userList", (req, res) => {
    res.json(userList);
});
app.get("/api/profile", (req, res) => {
    // console.log(req.query)
    // console.log(req.query.name)
    const searchedName = req.query.name
    const findUser = userList.find((e, i, a) => {
        return e.name == searchedName
    })
    // console.log(`The following user matched our database:`)
    // console.log(findUser)
    if (findUser) { //checking if the searched user exists 
        res.json(findUser) //send the data to the screen
    }else { //if it doesn't it sends a error in json format
        res.status(404).json({error: "User does not exist", code: 404})
    }
})
app.get("/api/details/:userName", (req, res) => {
    console.log(req.params)
    console.log(req.params.userName)
    const searchName = req.params.userName
    const findPerson = userList.find((e, i, a) => {
        return e.name === searchName
    })
    if (findPerson){
        res.json(findPerson)
    }else {
        res.status(404).json({error: "User not found", code: 404})
    }
})
//Route parameters
app.get("/api/customer/:id", (req, res) => {
    const customerId = req.params.id
    console.log(customerId)
    const findCustomer = customerData.find((e,i,a) => {
        return e.id === +customerId
    })
    console.log(findCustomer)
    if (findCustomer) {
        res.json(findCustomer.firstName + " " +  findCustomer.lastName)
    }else{
        res.status(404).json({error: "Customer does not exist", error: 404})
    }
})
//Find data


//Creates a entry point on port <portNum>
const PORT = process.env.PORT

app.listen(PORT, function() {
    console.log(`The server is listening on port http://localhost:${PORT}`)
}).on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.log("Port is already in use, try a different port or close any other servers.")
    }else {
        console.log("Server error:", error)
    }
})

