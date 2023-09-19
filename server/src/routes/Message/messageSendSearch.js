const {Router} = require('express')
const messageSendSearchHandler = require('../../handler/Message/messageSendSearch')

const messageSendSearch = Router()

messageSendSearch.get('/messageSendSearch', messageSendSearchHandler)

module.exports = messageSendSearch