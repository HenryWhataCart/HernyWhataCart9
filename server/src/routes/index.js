const { Router } = require("express");
const SuperUser = require("./SuperUser/SuperUserPost");
const SuperUserPut = require("./SuperUser/SuperUserUpdate");
const SuperUserPost = require("./SuperUser/SuperUserPost");
const deleteSuperUser = require("./SuperUser/SuperUserDelete");
const businessPost = require('../routes/Business/BusinessPost');
const businessUpdate = require('../routes/Business/BusinessUpdate')
const businessSearch = require('../routes/Business/BusinessSearch')
const businessDelete = require("../routes/Business/BusinessDelete");
const userUpdated = require("../routes/User/UserUpdated");
const userSearch = require('../routes/User/UserSearch')

const routes = Router();

routes.use("/", SuperUserPost);
routes.use("/", deleteSuperUser);
routes.use("/", businessPost)
routes.use("/", businessUpdate)
routes.use("/", businessSearch)
routes.use("/", SuperUser);
routes.use("/", SuperUserPut);
routes.use("/", businessDelete);
routes.use("/", userSearch);
routes.use("/", userUpdated);


module.exports = routes;