const { Op } = require('sequelize')
const {User,Rol} = require('../../db')

const userSearched = async(name) =>{
        if(!name) return await User.findAll({include: Rol})
        const userSearch = await User.findAll({
            where:{name:{
                [Op.iLike] : `%${name}%`
            }},include:Rol
        })
        return userSearch
}

module.exports = userSearched