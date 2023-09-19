const {MsgSend} = require('../../db')

const messageSendSearch = async({BusinessId,ContactId}) =>{
    if(!BusinessId && !ContactId) throw new Error("Missing Data")
    
    const messagesSend = await MsgSend.findAll({where:{
        BusinessId:BusinessId,
        ContactId:ContactId
    }})

    return messagesSend
    
}

module.exports = messageSendSearch