const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const businessUpdate = require('../routes/Business/BusinessUpdate')
const businessSearch = require('../routes/Business/BusinessSearch')

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)
routes.use("/",businessUpdate)
routes.use("/",businessSearch)


module.exports = routes;
