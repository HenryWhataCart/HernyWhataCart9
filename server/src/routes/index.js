const { Router } = require("express");

const SuperUserPost = require("./SuperUser/SuperUserPost")
const SuperUserGet = require("./SuperUser/SuperUserGet");

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/", SuperUserGet);

module.exports = routes;
