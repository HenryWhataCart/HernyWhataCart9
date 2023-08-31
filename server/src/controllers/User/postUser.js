const {User} = require('../../db')

const createUser = async(name,email,password,privilege) =>{
    try {
        const [newUser,created] = await User.findOrCreate({
            where:{
                name,
                email,
                password,
                privilege
            }
        })
        console.log(created)
        await newUser.save()
        return newUser
    } catch (error) {
        console.log('An error occurred while creating superuser',error)
        throw error
    }
}

module.exports = createUser