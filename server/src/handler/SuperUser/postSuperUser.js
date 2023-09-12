const createSuperUser = require('../../controllers/SuperUser/CreateSuperUser')
const {Superuser} = require('../../db')

const superUserPost = async(req,res) =>{
    const{name,email,password} = req.body
    try {
        if(!name || !email || !password) return res.status(404).json({error: 'required data not found'})

        const existingName = await Superuser.findOne({ where: { name } });
        const existingPassword = await Superuser.findOne({ where: { password } });
        const existingEmail = await Superuser.findOne({ where: { email } });

        if (existingName || existingPassword || existingEmail) {
        return res.status(400).json({ error: "Name, password or email already exist" });
        }
    
        const newSuperUser = await createSuperUser(name,email,password)
        if(!newSuperUser) return res.status(404).json({error: 'an error occurred while creating superuser'})
        return res.status(200).json(newSuperUser)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = superUserPost