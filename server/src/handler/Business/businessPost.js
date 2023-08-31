const createBusiness = require('../../controllers/Business/createBusiness')

const handlerBusinessPost = async(req,res) =>{
    const {name,SuperuserId} = req.body
    try {
        if(!name) return res.status(404).json({error:'required data not found'})
        const newBusiness = await createBusiness(name,SuperuserId)
        if(!newBusiness) return res.status(404).json({error:'Business not found'})
        return res.status(200).json(newBusiness)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerBusinessPost