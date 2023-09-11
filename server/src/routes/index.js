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
const userUpdated = require("../routes/User/UserUpdate");
const userSearch = require('../routes/User/UserSearch')
const createUser = require('./User/UserPost')
const userDelete = require('./User/UserDelete')
const login = require('./Login/loginRoute')
const validate = require('./userValidation/userValidation')

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
routes.use("/", createUser);
routes.use("/", userSearch);
routes.use("/", userUpdated);
routes.use("/", userDelete)
routes.use("/", login);
routes.use("/",validate)

module.exports = routes;
