const {Rol} = require('../../db')

const RolDelete = async(id) => {
        const findRol = await Rol.findOne({where:{id}})
        
        if(!findRol)  throw new Error('Id not found')
        
        await findRol.destroy()
}

module.exports = RolDelete