const {Router} = require('express')
const handlerValidation = require('../../handler/userValidation/handlerUserValidation')

const userValidationRoute = Router()

userValidationRoute.get("/userValidation",handlerValidation)

module.exports = userValidationRoute