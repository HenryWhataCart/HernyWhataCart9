const {Router} = require('express')
const updateNotificationHandler = require('../../handler/Contacts/updateNotification')

const putNotification = Router()

putNotification.put('/updateNotification',updateNotificationHandler)

module.exports=putNotification