require("dotenv").config;
const createError =  require("http-errors");
const express = require("express");
const app = express();
const { PORT } = process.env;
const port = PORT || 3000;

const indexRoute =  require("./routes/index");

app.use("/",indexRoute);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    const status = err.status || 500; 
    const valueText = status === 404 ? "No route match" : "Internal server error";
    res.status(status).send({
        status: status,
        message: "error",
        value: {
            text: valueText
        }
    })
});


app.listen(port, () => {
    console.log("server is running")
});