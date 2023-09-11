const {Router} = require('express')
const loginHandler = require('../../handler/Login/loginHandler')

const loginRoute = Router()

loginRoute.post('/login', loginHandler)

module.exports = loginRoute