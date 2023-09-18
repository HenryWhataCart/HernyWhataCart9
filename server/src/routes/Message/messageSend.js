const { Router } = require('express')

const messageSend = Router()

module.exports = (io)=>{
    messageSend.post('/messageSend', (req,res)=>{
        const {textMessage,name,timestamp, sent} = req.body
        // textMessage:"",
        // name: "Luis",
        // timestamp: '10:00 AM',
        // sent: true
        
        io.emit('message', {
            text: textMessage,
            name: name,
            timestamp: timestamp,
            sent:sent
        })
        // io.on('message', (socket)=>{
        //     socket.on('message',()=>{
        //         console.log(socket);

        //         console.log("Hola");
        //     })
        //     // socket.emit("message",{
        //     // })
        // })
        res.status(200).end()
    })
    return messageSend
}