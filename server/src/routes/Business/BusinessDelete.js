const { Router } = require("express");
const deletedBusiness = require("../../handler/Business/businessDelete");
const deleteBusinessRoute = Router();


deleteBusinessRoute.delete("/deleteBusiness/:id", deletedBusiness);


module.exports = deleteBusinessRoute;