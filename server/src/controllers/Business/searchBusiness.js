const { Op } = require('sequelize')
const {Business} = require('../../db')

const BusinessSearched = async(name) =>{
    try {
        if(!name) return await Business.findAll()
        const wantedBusiness = await Business.findOne({where:{name:{
            [Op.iLike] : `%${name}`
        }}})
        return wantedBusiness
    } catch (error) {
        console.log('an error occurred in the business search',error)
        throw error
    }
}

module.exports = BusinessSearched