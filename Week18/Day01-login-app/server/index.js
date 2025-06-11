const express = require("express");
const cors = require("cors");



const app = express();
//accept request from anywhere
app.use(cors());
app.use(express.json())

//Middleware example
function requestRealTime(req,res,next) {
    console.log(`Request recieved at ${new Date()}`)
    next();
}
app.get("/", (req,res)  => {
    res.setEncoding("Server is runing!");
})

const usersDatabase = [
    {email: "rob@dvds.com", password: "rob123"},
    {email: "john@dvds.com", password: "john123"},
]

app.post("/login", (req,res) => {
    console.log("login endpoint hit!", req.body)
    console.log(req.body.email)
    const userEmail = req.body.email
    const userPassword = req.body.password

    const user = usersDatabase.find((e,i,arr) => {
        return e.email === userEmail
    })
    // console.log(`user is: ${user.password}`)
    if (user){
        console.log(1)
        if (userPassword === user.password){
            res.sendStatus(200);
            console.log("Login success!")
        }else{
        res.sendStatus(401);
        console.log("Password is wrong")
        }
    }else{
        res.sendStatus(401);
        console.log("User does not exist.")
    }
})

app.listen(PORT=4000, function() {
    console.log(`The server is listening on http://localhost:${PORT}`)
}).on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.log("Port is already in use, try a different port or close any other servers.")
    }else {
        console.log("Server error:", error)
    }
})

