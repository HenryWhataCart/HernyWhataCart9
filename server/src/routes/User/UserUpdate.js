const { Router } = require("express");
const userUpdated = require("../../handler/User/userUpdated");
const userUpdateRouter = Router();
userUpdateRouter.put("/updateUser/:id", userUpdated);
module.exports = userUpdateRouter;
