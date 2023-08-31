const {Router} = require('express')
const handleDeleteUser = require('../../handler/User/UserDelete')

const userDeleteRouter = Router()

userDeleteRouter.delete('/deleteUser/:id',handleDeleteUser)

module.exports = userDeleteRouter