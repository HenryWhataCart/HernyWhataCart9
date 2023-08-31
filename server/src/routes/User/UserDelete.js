const {Router} = require('express')
const handleDeleteUser = require('../../handler/User/UserDelete')

const userDeleteRouter = Router()

userDeleteRouter.delete('/deleteUser',handleDeleteUser)

module.exports = userDeleteRouter