const { Router } = require('express')
const RolDeleted = require('../../handler/Rol/deleteRol')


const deleteRouter = Router()

deleteRouter.delete('/deleteSuperUser/:id',RolDeleted)

module.exports = deleteRouter