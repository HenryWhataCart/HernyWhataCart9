const {Router} = require('express')
const superUserPost = require('../../handler/SuperUser/postSuperUser')

const superuserRoute = Router()

superuserRoute.post('/',superUserPost)

module.exports = superuserRoute