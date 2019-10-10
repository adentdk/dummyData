const route = require("express").Router();
const controller = require("../app/controllers/auth");;

route.get("/", controller.index);
route.post("/login", controller.login);

module.exports = route;