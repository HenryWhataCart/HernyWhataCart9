const { Router } = require("express");
const createRolHandler = require("../../handler/Rol/rolPost");
const RolPostRoute = Router();
RolPostRoute.post("/createRol", createRolHandler);
module.exports = RolPostRoute;
