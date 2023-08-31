const {Router} = require('express')
const handlerBusinessPost = require('../../handler/Business/businessPost')

const BusinessPostRoute = Router()

BusinessPostRoute.post('/createBusiness',handlerBusinessPost)

module.exports = BusinessPostRoute

//id superuser = 0035e13c-d216-4235-835b-e3bd66ae15bd
//id business = 36a8ad73-6a14-4a63-9339-6f91826506f5