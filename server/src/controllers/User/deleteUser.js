const {User} = require('../../db')

const userDeleted = async(id) =>{
    try {
        const findId = await User.findOne({where:{id}})
        if(!findId) throw new error ('error finding id')
        await findId.destroy()
        console.log('User deleted')
    } catch (error) {
        console.log('An error occurred while deleting the user by id')
        throw error
    }
}

module.exports = userDeleted
