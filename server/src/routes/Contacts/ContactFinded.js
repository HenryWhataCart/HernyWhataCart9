const {Router} = require('express')
const findedContact = require('../../handler/Contacts/ContactsFinds')

const ContactFindedRouter = Router()

ContactFindedRouter.get('/msgFind',findedContact)

module.exports=ContactFindedRouter