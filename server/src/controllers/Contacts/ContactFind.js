const {MsgReceived} = require('../../db')

const contactFinded = async({BusinessId,ContactId}) =>{
    if(!BusinessId && !ContactId) throw new Error("Missing Data")
    
    const contact = await MsgReceived.findAll({where:{
        BusinessId:BusinessId,
        ContactId:ContactId
    }})

    return contact
    
}

module.exports = contactFinded