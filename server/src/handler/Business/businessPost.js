const createBusiness = require('../../controllers/Business/createBusiness')

const handlerBusinessPost = async(req,res) =>{
    // const {name,phone, email,SuperuserId} = req.body
    const {name,phone, email,apiKey,srcName} = req.body
    console.log(name,phone, email,apiKey,srcName);
    try {
        if(!name || !phone || !email || !apiKey || !srcName) return res.status(404).json({error:'required data not found'})
        // const newBusiness = await createBusiness(name,phone,email,SuperuserId)
        const newBusiness = await createBusiness({name,phone,email,apiKey,srcName})
        if(!newBusiness) return res.status(404).json({error:'Business not found'})
        return res.status(200).json(newBusiness)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerBusinessPost