const { Rol } = require("../../db");



const createRol = async (req, res) => {
  const { name } = req.body;
  
    if (!name) return res.status(400).json({ error: "Required data not found" });
    const newRol = await Rol.create({
      name: name,
    });
    return newRol
 
};
module.exports = createRol;
