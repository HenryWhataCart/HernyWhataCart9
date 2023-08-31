const { Router } = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const businessDelete = require("../routes/Business/BusinessDelete")
const routes = Router();

routes.use("/", SuperUser);
routes.use("/", SuperUserPut);
routes.use("/", businessDelete);

=======
=======
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
>>>>>>> a868cc5c91a9058212def6c51b3c455603faeea5
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const businessUpdate = require('../routes/Business/BusinessUpdate')
const businessSearch = require('../routes/Business/BusinessSearch')

const routes = Router();
routes.use("/", SuperUserPost);
routes.use("/",deleteSuperUser);
routes.use("/",businessPost)
<<<<<<< HEAD


>>>>>>> 4ab114d1aeb020fe58cef4a2d100178e2ecd00cd
=======
routes.use("/",businessUpdate)
routes.use("/",businessSearch)
routes.use("/", SuperUser);
routes.use("/", SuperUserPut);

>>>>>>> a868cc5c91a9058212def6c51b3c455603faeea5
module.exports = routes;
