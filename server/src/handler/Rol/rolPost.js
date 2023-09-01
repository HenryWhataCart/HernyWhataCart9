const createRol = require("../../controllers/Rol/createRol");

const createRolHandler = async (req, res) => {
  try {
    const { name,businessId } = req.body;
    const newRol = await createRol(name, businessId); 
    res.status(201).json(newRol);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createRolHandler;
