const { Router } = require("express");
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const routes = Router();

routes.use("/", SuperUser);
routes.use("/", SuperUserPut);
module.exports = routes;
