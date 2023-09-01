const {User} = require('../../db')

const createUser = async(name,email,password,phone,privilege, businessId) =>{
        const [newUser,created] = await User.findOrCreate({
            where:{
                name,
                email,
                password,
                phone,
                privilege,
                BusinessId: businessId
            }
        })
        
        await newUser.save()
        return newUser
}

module.exports = createUser