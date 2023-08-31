const { Router } = require('express')
const userPost = require("../../handler/User/createUser")


const userRoute = Router()

userRoute.post('/createUser',userPost)

module.exports = userRoute