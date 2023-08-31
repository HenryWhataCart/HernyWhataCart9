const {Router} = require('express')
const UserSearch = require('../../handler/User/UserSearch')

const UserSearchRoute = Router()

UserSearchRoute.get('/userSearch',UserSearch)

module.exports = UserSearchRoute
