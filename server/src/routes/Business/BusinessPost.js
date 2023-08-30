const {Router} = require('express')
const handlerBusinessPost = require('../../handler/Business/businessPost')

const BusinessPostRoute = Router()

BusinessPostRoute.post('/createBusiness',handlerBusinessPost)

module.exports = BusinessPostRoute