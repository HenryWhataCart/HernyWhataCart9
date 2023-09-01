const { Op } = require("sequelize");
const { Rol } = require("../../db");

const searchRolController = async (name) => {
  try {
    if (!name) return await Rol.findAll();

    const wantedRoles = await Rol.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return wantedRoles;
  } catch (error) {
    console.log("An error occurred while searching for roles", error);
    throw error;
  }
};

module.exports = searchRolController;
