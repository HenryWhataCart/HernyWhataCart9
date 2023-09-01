const { Rol } = require("../../db");



const createRol = async (name, businessId) => {
  
    if (!name || !businessId) return res.status(400).json({ error: "Required data not found" });
    const newRol = await Rol.create({
      name: name,
      BusinessId: businessId
    });
    return newRol
 
};
module.exports = createRol;
