const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost')

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)


module.exports = routes;
