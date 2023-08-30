const {Superuser} = require('../../db')

const SuperuserDelete = async(id) => {
    try{
        const findSuperUser = await Superuser.findOne({where:{id}})
        if(!findSuperUser)  throw new Error('id not found')
        await findSuperUser.destroy()
        console.log('Super User deleted')
    }catch(error){
        console.log('An error occurred while deleting the super user',error)
    }
}

module.exports = SuperuserDelete