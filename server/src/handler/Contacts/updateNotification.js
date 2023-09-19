const updateNotification = require('../../controllers/Contacts/updateNotification')

const updateNotificationHandler = async (req, res)=>{
    try {
        const {phoneNumber, value} = req.body
        console.log(phoneNumber, value);
        await updateNotification({phoneNumber,value})
        res.status(200).json({phoneNumber,value})    
    } catch (error) {
        res.status(400).json(error.message)
    }
    
}

module.exports = updateNotificationHandler