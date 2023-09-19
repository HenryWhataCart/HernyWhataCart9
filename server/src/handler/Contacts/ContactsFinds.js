const contactFinded = require('../../controllers/Contacts/ContactFind')

const findedContact = async(req,res) =>{
    const {BusinessId,ContactId} = req.query 
    console.log(BusinessId,ContactId);
    try {
        if(!BusinessId || !ContactId) return res.status(404).json({error:'BusinessId and socketId required'})
        const msgFind = await contactFinded({BusinessId,ContactId})
        if(!msgFind) return res.status(404).json({error:'Contact not found'})
        return res.status(200).json(msgFind)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = findedContact