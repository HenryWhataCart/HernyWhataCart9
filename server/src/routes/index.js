const { Router } = require("express");
const SuperUser = require("./SuperUser/SuperUserPost");

const routes = Router();

routes.use("/", SuperUser);

module.exports = routes;
