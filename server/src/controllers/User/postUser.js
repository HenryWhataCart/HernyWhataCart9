const {User} = require('../../db')

const createUser = async(name,email,password,phone,privilege, businessId) =>{
        const [newUser,created] = await User.findOrCreate({where:{name:name},defaults:{
            email,
            password,
            phone,
            privilege,
            BusinessId: businessId
        }
        })
        console.log(newUser)
        return newUser
}

module.exports = createUser
