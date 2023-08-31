const {Superuser} = require('../../db')

const SuperuserDelete = async(id) => {
        const findSuperUser = await Superuser.findOne({where:{id}})
        
        if(!findSuperUser)  throw new Error('id not found')
        
        await findSuperUser.destroy()
}

module.exports = SuperuserDelete