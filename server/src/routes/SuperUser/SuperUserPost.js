const {Router} = require('express')
const superUserPost = require('../../handler/SuperUser/postSuperUser')

const superuserRoute = Router()

superuserRoute.post('/createSuperUser',superUserPost)

module.exports = superuserRoute