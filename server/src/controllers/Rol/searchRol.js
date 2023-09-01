const { Op } = require("sequelize");
const { Rol } = require("../../db");

const searchRolController = async (name) => {
  
    if (!name) return await Rol.findAll();

    const wantedRoles = await Rol.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return wantedRoles;
  

};

module.exports = searchRolController;
