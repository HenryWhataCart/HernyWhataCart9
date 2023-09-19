const { Router } = require('express')
const {Business,User,MsgReceived, Contacts} = require('../../db')

const messageWebhook = Router()


module.exports = (io)=>{
    messageWebhook.post('/messageWebHook/', async (req, res) =>{
        const {type, payload, timestamp,app} = req.body
        // console.log(req.body);
        const date = new Date(timestamp)
        // const splitDate = date 
        const hours = date.getHours().toString()
        const minutes = date.getMinutes().toString()
        const seconds = date.getSeconds().toString()
        if (type === 'message') {    
            const business = await Business.findOne({where: {srcName: app}})
            if (business) {
                const users = await User.findAll({where:{BusinessId:business.id}})
                if (users.length > 0) {
                    const [updatedCount, updatedRows] = await Contacts.update({notification: true}, {where: {phone: payload.source}})
                    users.forEach((user)=>{
                        io.to(user.socketId).emit('message', {
                                text:payload.payload.text,
                                from: payload.source,
                                name:payload.sender.name,
                                timestamp: `${hours}:${minutes}:${seconds}`,
                                sent:false,
                                key:payload.payload.id
                            });
                    })
                }
        
                const [newContact, created] = await Contacts.findOrCreate({where:{phone:payload.source, BusinessId:business.id}, defaults:{name:payload.sender.name, notification:true}})
                await MsgReceived.create({name: payload.sender.name, phone:payload.source, payload: payload,timestamp:timestamp, BusinessId: business.id, ContactId: newContact.id})
            }
        }
        
        res.status(200).end()
    })

    return messageWebhook;
}



// module.exports = messageWebhook