const { Contacts } = require('../../db')

const updateNotification = async ({phoneNumber, value})=>{
   
    const [updatedCount, updatedRows] = await Contacts.update({notification: value}, {where: {phone: phoneNumber}})
}

module.exports=updateNotification