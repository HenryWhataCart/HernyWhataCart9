const { Router } = require("express");
const userUpdated = require("../../handler/User/userUpdate");
const userUpdateRouter = Router();

userUpdateRouter.put("/updateUser/:id", userUpdated);

module.exports = userUpdateRouter;