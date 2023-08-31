const { Router } = require('express');
const businessUpdated = require('../../handler/Business/businessUpdate');

const updateBusinessRouter = Router();

updateBusinessRouter.put('/updateBusiness/:id', businessUpdated);

module.exports = updateBusinessRouter;
