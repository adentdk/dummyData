require("dotenv").config
const express = require("express");
const app = express();

const { PORT } = process.env

const port = PORT || 3000

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : {
            "text": "Welcome to dummydata API" 
        }
    })
});

app.listen(port, () => {
    console.log("server is running")
});