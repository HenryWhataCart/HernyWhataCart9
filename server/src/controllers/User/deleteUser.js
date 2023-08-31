const {User} = require('../../db')

const userDeleted = async(id) =>{
    
        const findId = await User.findOne({where:{id}})
        if(!findId) throw new error ('error finding id')
        await findId.destroy()
        return {message:'User deleted'}
    
}

module.exports = userDeleted
