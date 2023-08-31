const { Op } = require('sequelize')
const {Business} = require('../../db')

const BusinessSearched = async(name) =>{
    
    if(!name) return await Business.findAll()
    
    const wantedBusiness = await Business.findAll({where:{
            name:{
            [Op.iLike] : `%${name}%`,
        }
    }})

    return wantedBusiness
}

module.exports = BusinessSearched