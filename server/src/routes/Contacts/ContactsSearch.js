const {Router} = require('express')
const ContactsSearchHandler = require('../../handler/Contacts/ContactsSearch')

const ContactsSearch = Router()

ContactsSearch.get('/contactsSearch', ContactsSearchHandler)

module.exports = ContactsSearch