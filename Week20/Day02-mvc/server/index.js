const express = require("express");
const sql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

const app = express();

//middleware
app.use(cors());

const pool = sql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DATABASE,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
})

app.get("/", (req,res) => {
    pool.execute("select * from team_mate", (err,result) => {
         if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result)
    })
})

app.get("/api/users", (req,res) => {
    pool.execute(`select * from team_mate`, (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result)
    })
});

//Get a specific user
app.get("/api/users/:id", (req,res) => {
    pool.execute(`select * from team_mate where id = ?`,[req.params.id], (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result)
    })
})

//Create a new user
app.post("/api/users", (req,res) => {

})

//Update a new user
app.put("/api/users/:id", (req,res) => {

})

//Delete a new user
app.delete("/api/users/:id", (req,res) => {

})



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});