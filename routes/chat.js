const route = require("express").Router();
const controller = require("../app/controllers/chat");;

route.get("/", controller.index);
route.get("/conversations", controller.conversations);

module.exports = route;