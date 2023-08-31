const { Router } = require("express");
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const businessUpdate = require('../routes/Business/BusinessUpdate')
const businessSearch = require('../routes/Business/BusinessSearch')
const SuperUserGet = require("../routes/SuperUser/SuperUserGet")
const userPost = require("../routes/User/UserPost")

const routes = Router();
routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)
routes.use("/",businessUpdate)
routes.use("/",businessSearch)
routes.use("/", SuperUser);
routes.use("/", SuperUserPut);
routes.use("/", SuperUserGet)
routes.use("/", userPost)

module.exports = routes;
