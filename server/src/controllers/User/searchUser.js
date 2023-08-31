const { Op } = require('sequelize')
const {User} = require('../../db')

const userSearched = async(name) =>{
        if(!name) return await User.findAll()
        const userSearch = await User.findAll({
            where:{name:{
                [Op.iLike] : `%${name}%`
            }}
        })
        return userSearch
}

module.exports = userSearched