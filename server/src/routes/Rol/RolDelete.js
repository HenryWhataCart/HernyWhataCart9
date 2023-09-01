const { Router } = require('express')
const RolDeleted = require('../../handler/Rol/deleteRol')


const deleteRouter = Router()

deleteRouter.delete('/deleteRol/:id',RolDeleted)

module.exports = deleteRouter