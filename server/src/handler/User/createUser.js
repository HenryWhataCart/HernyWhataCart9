const createUser = require("../../controllers/User/postUser")
const {User} = require('../../db')

const userPost = async(req,res) => {
    const {name,email,password, phone, privilege, businessId} = req.body
    try {
        if(!name || !email || !password || !phone ) return res.status(404).json({error: 'required data not found'})

        const existingName = await User.findOne({ where: { name } });
        const existingPassword = await User.findOne({ where: { password } });
        const existingEmail = await User.findOne({ where: { email } });
        const existingPhone = await User.findOne({ where: { phone } });

        if (existingName || existingPassword || existingEmail || existingPhone ) {
        return res.status(400).json({ error: "Name, password, phone or email already exist" });
        }
        
        const newUser = await createUser(name,email,password, phone, privilege, businessId)
        if(!newUser) return res.status(404).json({error: 'an error occurred while creating user'})
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = userPost
