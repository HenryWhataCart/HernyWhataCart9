const { Superuser } = require("../../db");
const { Op } = require('sequelize')

const findAllSuperUsers = async () => {
    return await Superuser.findAll()
}


const findSuperUserByName = async (name) => {
    const superUserByName = await Superuser.findAll({
      where: {
        name:{[Op.iLike]: `%${name}%`}
      }
    })
    return superUserByName;
}

module.exports = {findAllSuperUsers, findSuperUserByName}







