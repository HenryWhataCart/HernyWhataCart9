const { Op } = require("sequelize");
const { Rol } = require("../../db");

const searchRolController = async (name, businessId) => {
  if (!name && !businessId) {
    // Si no se proporcionan parámetros, devolver todos los roles.
    return await Rol.findAll();
  }

  if (businessId && !name) {
    // Si se proporciona businessId y name es nulo, devolver todos los roles con ese businessId.
    return await Rol.findAll({
      where: {
        BusinessId: businessId,
      },
    });
  }

  if (name && businessId) {
    // Si se proporciona tanto name como businessId, devolver un solo rol que coincida con ambos.
    return await Rol.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
        BusinessId: businessId,
      },
    })
  }
}

module.exports = searchRolController;

