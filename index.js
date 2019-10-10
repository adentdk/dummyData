require("dotenv").config;
const createError =  require("http-errors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PORT } = process.env;
const port = PORT || 3333;

const indexRoute =  require("./routes/index");
const chatRoute = require("./routes/chat");
const authRoute = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use("/",indexRoute);
app.use("/auth", authRoute);
app.use("/chat", chatRoute);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    const status = err.status || 500; 
    const valueText = status === 404 ? "No route match" : "Internal server error";
    console.log(err);
    return res.status(status).send({
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