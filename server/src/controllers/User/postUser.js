const { User, Rol } = require("../../db");

const createUser = async (
  name,
  email,
  password,
  phone,
  privilege,
  rolIdRow,
  businessId
) => {
  const [newUser, created] = await User.findOrCreate({
    where: { name: name },
    defaults: {
      email,
      password,
      phone,
      privilege,
      BusinessId: businessId,
    },
  });

  for (const rolId of rolIdRow) {
    const findRol = await Rol.findOne({ where: { id: rolId } });
    await newUser.addRol(findRol);
  }

  return newUser;
};

module.exports = createUser;
