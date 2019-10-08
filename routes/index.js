const route = require("express").Router();
const controller = require("../app/controllers/root");;

route.get("/", controller.index);

module.exports = route;