const {Superuser} = require('../../db')

const createSuperUser = async(name,email,password) =>{
    try {
        const [newSuperUser,created] = await Superuser.findOrCreate({
            where:{
                name,
                email,
                password
            }
        })
        console.log(created)
        await newSuperUser.save()
        return newSuperUser
    } catch (error) {
        console.log('an error occurred while creating superuser',error)
        throw error
    }
}

module.exports = createSuperUser