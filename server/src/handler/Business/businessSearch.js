const BusinessSearched = require('../../controllers/Business/searchBusiness')

const handlerSearchBusiness = async(req,res) =>{
    const {name} = req.query
    try {
        if(!name) return res.status(404).json({error:'invalid name'})
        const wantedBusiness = await BusinessSearched(name)
        if(!wantedBusiness) return res.status.json({error:'company not found'})
        return res.status(200).json(wantedBusiness)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerSearchBusiness