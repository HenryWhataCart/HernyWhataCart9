const { Router } = require("express");
const superUserPut = require("../../handler/SuperUser/putSuperUser");

const updateSuperuserRouter = Router();

updateSuperuserRouter.put("/updateSuperuser/:id", superUserPut);

module.exports = updateSuperuserRouter;
