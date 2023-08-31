const { Op } = require('sequelize')
const {User} = require('../../db')

const userSearched = async(name) =>{
    try {
        if(!name) return await User.findAll()
        const userSearch = await User.findAll({
            where:{name:{
                [Op.iLike] : `%${name}%`
            }}
        })
        return userSearch
    } catch (error) {
        console.log('An error occurred while searching for the user.')
        throw error
    }
}

module.exports = userSearched