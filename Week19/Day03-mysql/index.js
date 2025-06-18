const express = require("express");
const mysql = require("mysql2");
require("dotenv").config()

const app = express();

// //Connection to database
// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASS,
//     database: process.env.MYSQL_DATABASE,
// })

//Build connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
//Initial  router handler 
app.get("/", (req,res) => {
    pool.query(`select * from country`, (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fething data from the database.",
                error: err
            })
        }
        res.send(result);
    })
}) 

app.get("/oceania", (req,res) => {
    pool.query(`select * from country where Continent = "Oceania" order by LifeExpectancy desc limit 10`, (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result);
    })
}) 

// Use ?something=something and then req.query.something to access it 
app.get("/oceania/populationrank", (req,res) => {
    pool.execute(`select * from country where Continent = "Oceania" order by population desc limit ?;`, [req.query.limit], (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result);   
    })
}) 

//Exercise 4
app.get("/preparedstatement", (req,res) => {
    console.log(req.params);
    pool.execute(`select name,Continent,Population from country where Continent != ? and LifeExpectancy >= ? order by LifeExpectancy desc;
`, ["Europe", 75], (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result);
    })
}) 

//Exercise 5
app.get("/continent/:continent", (req,res) => {
    console.log(req.params);
    pool.execute(`select SUM(population) as Total_Population from country where continent = ?;
`, [req.params.continent], (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result);
    })
}) 

//params to search, needs to be EXECUTE and have the following syntax to prevent a SQL injection
app.get("/country/:code", (req,res) => {
    console.log(req.params);
    pool.execute(`select * from country where code = ?`, [req.params.code], (err,result) => {
        if (err){
            console.log("Database Error:", err)
            return res.status(500).json({
                errorMessage: "An error occured while fetching data from the database.",
                error: err
            })
        }
        res.send(result);
    })
}) 

const PORT = process.env.PORT

app.listen(4000, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});