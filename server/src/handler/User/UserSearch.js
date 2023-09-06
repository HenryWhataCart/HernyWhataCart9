const userSearched = require('../../controllers/User/searchUser')

const searchUser = async(req,res) =>{
    const{name,businessId} = req.query
    try {
        const nameSearched = await userSearched({name,businessId})
        if(!nameSearched || nameSearched.length === 0) return res.status(200).json([])
        return res.status(200).json(nameSearched)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = searchUser