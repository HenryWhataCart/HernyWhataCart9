const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);


module.exports = routes;
