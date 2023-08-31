const createUser = require("../../controllers/User/postUser")

const userPost = async(req,res) =>{
    const{name,email,password,privilege} = req.body
    try {
        if(!name || !email || !password || !privilege) return res.status(404).json({error: 'required data not found'})
        const newUser = await createUser(name,email,password, privilege)
        if(!newUser) return res.status(404).json({error: 'an error occurred while creating superuser'})
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = userPost