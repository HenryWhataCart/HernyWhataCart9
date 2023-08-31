const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const SuperUserDelete = require("./SuperUser/SuperUserDelete");
const SuperUserGet = require("../routes/SuperUser/SuperUserGet");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require("../routes/Business/BusinessPost");
const businessUpdate = require("../routes/Business/BusinessUpdate");
const businessSearch = require("../routes/Business/BusinessSearch");
const businessDelete = require("../routes/Business/BusinessDelete");
const rolPost = require("../routes/Rol/RolPost");
const rolSearch = require("../routes/Rol/RolSearch");

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/", SuperUserPut);
routes.use("/", SuperUserDelete);
routes.use("/", SuperUserGet);
routes.use("/", deleteSuperUser);
routes.use("/", businessPost);
routes.use("/", businessUpdate);
routes.use("/", businessSearch);
routes.use("/", businessDelete);
routes.use("/", rolPost);
routes.use("/", rolSearch);
module.exports = routes;
