const {User} = require('../../db')

const createUser = async(name,email,password,privilege, businessId) =>{
        const [newUser,created] = await User.findOrCreate({
            where:{
                name,
                email,
                password,
                privilege,
                BusinessId: businessId
            }
        })
        
        await newUser.save()
        return newUser
}

module.exports = createUser