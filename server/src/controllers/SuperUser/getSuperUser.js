const { Superuser } = require("../../db");
const { Op } = require('sequelize')

const findAllSuperUsers = async () => {
  try {
    return await Superuser.findAll()
  } catch (error) {
    throw new Error(error)
  }
}


const findSuperUserByName = async (name) => {
  try {
    const superUserByName = await Superuser.findAll({
      where: {
        name:{[Op.iLike]: `%${name}`}
      }
    })
    return superUserByName;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {findAllSuperUsers, findSuperUserByName}







