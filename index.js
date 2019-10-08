const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "OK",
        "data" : {
            "text": "Welcome to dummydata API" 
        }
    })
});

app.listen(3000, () => {
    console.log("server is running")
});