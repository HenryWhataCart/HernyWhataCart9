const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const BusinessUpdate = require('../routes/Business/BusinessUpdate')

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)
routes.use("/",BusinessUpdate)


module.exports = routes;
