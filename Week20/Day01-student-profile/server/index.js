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
    pool.execute("select * from students", (err,result) => {
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

app.get("/api/user", (req,res) => {
    pool.execute(`select student_id,name,profile_pic from students`, (err,result) => {
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

app.get("/students/:id", (req,res) => {
    pool.execute(`select student_id,name,profile_pic from students where student_id = ?`,[req.params.id], (err,result) => {
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

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});