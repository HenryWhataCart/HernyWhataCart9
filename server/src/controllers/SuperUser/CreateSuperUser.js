const { Superuser } = require("../../db");

const createSuperUser = async (name, email, password) => {
  const [newSuperUser] = await Superuser.findOrCreate({
    where: {
      name,
      email,
      password,
    },
  });
  await newSuperUser.save();

  return newSuperUser;
};

module.exports = createSuperUser;
