const userSearched = require('../../controllers/User/searchUser')

const searchUser = async(req,res) =>{
    const{name} = req.query
    try {
        const nameSearched = await userSearched(name)
        if(!nameSearched) return res.status(404).json(nameSearched)
        return res.status(200).json(nameSearched)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = searchUser