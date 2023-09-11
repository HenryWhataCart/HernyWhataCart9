const controllerValidation = require('../../controllers/userValidation/controllerUserValidation')


const handlerValidation = async(req,res) =>{
    const {BusinessId,id} = req.query
    try {
        if(!BusinessId || !id) return res.status(404).json({error:'Businessid or id not found'})
        const validation = await controllerValidation({BusinessId,id})
        if(BusinessId && id) return res.status(200).json(validation)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = handlerValidation