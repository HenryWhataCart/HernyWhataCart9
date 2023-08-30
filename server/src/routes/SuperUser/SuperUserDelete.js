const {Router} = require('express')
const SuperUserDeleted = require('../../handler/SuperUser/deleteSuperUser')

const deleteRouter = Router()

deleteRouter.delete('/:id',SuperUserDeleted)

module.exports = deleteRouter