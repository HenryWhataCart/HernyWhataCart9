const { Router } = require('express')
const { MsgSend } = require('../../db')
const { Business } = require('../../db')
const axios = require('axios')

const messageSend = Router()

module.exports = (io)=>{
    messageSend.post('/messageSend', async (req,res)=>{
        const {textMessage,name,phone, BusinessId, ContactId} = req.body
      
        try {
            const date = new Date()
            const hours = date.getHours().toString()
            const minutes = date.getMinutes().toString()
            const seconds = date.getSeconds().toString()
            const apiUrl = 'https://api.gupshup.io/sm/api/v1/msg';
            const apiKey = 'ntt9hywwien4onvunfbgvq3eqa4xahwa';

            const business = await Business.findByPk(BusinessId)
            
            const data = {
                channel: 'whatsapp',
                source: business.phone,
                destination: phone,
                message: JSON.stringify({
                  type: 'text',
                  text: textMessage
                }),
                'src.name': business.srcName
              };
              const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                apikey: apiKey,
              };
        

            const response = await axios.post(apiUrl, data,{headers})
            //   res.status(200).json(response.data)

            const msgCreated = await MsgSend.create({name: name, phone:phone, message: textMessage,BusinessId: BusinessId, ContactId: ContactId, timestamps:date})  
             io.emit('message', {
                from:phone,
                text: textMessage,
                name: name,
                timestamp: `${hours}:${minutes}:${seconds}`,
                sent: true
            })
            res.status(201).json(msgCreated)
            
        } catch (error) {
            res.status(400).json(error.message)
        }
        
        
        res.status(200).end()
    })
    return messageSend
}