const {Router} = require('express')
const SuperUser = require('./SuperUser/SuperUser')

const routes = Router()

routes.use('/superUser',SuperUser)

module.exports = routes