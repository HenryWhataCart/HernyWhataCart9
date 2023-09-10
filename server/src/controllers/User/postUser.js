const { User, Rol } = require("../../db");

<<<<<<< HEAD
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
=======
const createUser = async(name,email,password,phone,privilege, businessId) =>{
    // example for rolIdRow ["998a0c02-4ff1-434c-9108-05cd8c72b873"]
        const [newUser,created] = await User.findOrCreate({where:{name:name},defaults:{
            email,
            password,
            phone,
            privilege,
            BusinessId: businessId
        }
        })
        
>>>>>>> 80964560514f04efa09ad3be8b3f6130999e5994

  for (const rolId of rolIdRow) {
    const findRol = await Rol.findOne({ where: { id: rolId } });
    await newUser.addRol(findRol);
  }

  return newUser;
};

module.exports = createUser;
