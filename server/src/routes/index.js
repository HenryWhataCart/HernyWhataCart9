const { Router } = require("express");
<<<<<<< HEAD
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const businessDelete = require("../routes/Business/BusinessDelete")
const routes = Router();

routes.use("/", SuperUser);
routes.use("/", SuperUserPut);
routes.use("/", businessDelete);

=======
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost')

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)


>>>>>>> 4ab114d1aeb020fe58cef4a2d100178e2ecd00cd
module.exports = routes;
