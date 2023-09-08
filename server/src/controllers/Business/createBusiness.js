const { Business } = require("../../db");

const createBusiness = async (name, phone, email, SuperuserId) => {
  const [newBusiness] = await Business.findOrCreate({
    where: {
      name,
      phone,
      email,
      // SuperuserId,
    },
  });

  await newBusiness.setSuperuser(SuperuserId);
  await newBusiness.save();
  return newBusiness;
};

module.exports = createBusiness;
