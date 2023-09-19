const contactsGet = require('../../controllers/Contacts/ContactsGet') 


const ContactsSearchHandler = async (req,res)=>{
    try {
        const {businessId} = req.query
        const contacts =  await contactsGet(businessId)
        res.status(200).json(contacts)    
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}

module.exports=ContactsSearchHandler