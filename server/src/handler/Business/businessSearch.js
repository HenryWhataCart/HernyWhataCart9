const BusinessSearched = require('../../controllers/Business/searchBusiness')

const handlerSearchBusiness = async(req,res) =>{
    const {name} = req.query
    try {
        const wantedBusiness = await BusinessSearched(name)
        if(!wantedBusiness) return res.status.json({error:'company not found'})
        return res.status(200).json(wantedBusiness)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerSearchBusiness