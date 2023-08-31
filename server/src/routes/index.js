const { Router } = require("express");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const SuperUserDelete = require("./SuperUser/SuperUserDelete");
const SuperUserGet = require("../routes/SuperUser/SuperUserGet");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const businessUpdate = require('../routes/Business/BusinessUpdate');
const businessSearch = require('../routes/Business/BusinessSearch');
const businessDelete = require("../routes/Business/BusinessDelete");
<<<<<<< HEAD
const rolPost = require("../routes/Rol/RolPost");
=======
const userUpdated = require("../routes/User/UserUpdate");
const userSearch = require('../routes/User/UserSearch');
const userDelete = require('../routes/User/UserDelete');
const userPost = require("../routes/User/UserPost")
>>>>>>> 8e7f20b2e60aed483a4a570c3b1831be726cf81d

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
<<<<<<< HEAD
routes.use("/", rolPost);
=======
routes.use("/", userUpdated);
routes.use("/", userSearch);
routes.use("/", userDelete);
routes.use("/",userPost)

>>>>>>> 8e7f20b2e60aed483a4a570c3b1831be726cf81d
module.exports = routes;
