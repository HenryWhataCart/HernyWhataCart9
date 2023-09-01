const createRol = require("../../controllers/Rol/createRol");

const createRolHandler = async (req, res) => {
  try {
    const newRol = await createRol(req, res);
    res.status(201).json(newRol);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createRolHandler;
