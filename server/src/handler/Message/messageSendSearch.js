const messageSendSearch = require('../../controllers/Message/messageSendSearch')


const messageSendSearchHandler = async (req,res)=>{
    try {
        const {BusinessId, ContactId} = req.query
        const messageSend =  await messageSendSearch({BusinessId,ContactId})
        res.status(200).json(messageSend)    
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}

module.exports=messageSendSearchHandler