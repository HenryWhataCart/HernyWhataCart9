const {Contacts} = require('../../db')

const contactsGet= async (BusinessId)=>{
    if (!BusinessId) throw new Error('Missing data')
    const contacts = await Contacts.findAll({where:{BusinessId: BusinessId}})

    return contacts
}

module.exports=contactsGet