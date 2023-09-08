const { Op } = require('sequelize')
const {User,Rol} = require('../../db')

const userSearched = async({name,businessId}) =>{
    
        if(!name && !businessId) return await User.findAll()
        
        if(!name && businessId){
            return await User.findAll({where:{
                BusinessId:businessId
            }})
        }

        if(name && businessId){
            const userSearch = await User.findAll({
                where:{
                    name:{
                    [Op.iLike] : `%${name}%`
                    },
                    BusinessId:businessId
            
            }
            })
            return userSearch
        }
        
}

module.exports = userSearched