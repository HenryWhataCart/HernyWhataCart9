const { Router } = require("express");
const rolSearch = require("../../handler/Rol/rolSearch");
const rolSearchRouter = Router();
rolSearchRouter.get("/searchRol", rolSearch);
module.exports = rolSearchRouter;
