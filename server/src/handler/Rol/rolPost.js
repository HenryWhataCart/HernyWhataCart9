const createRol = require("../../controllers/Rol/createRol");

const createRolHandler = async (req, res) => {
  try {
    await createRol(req, res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createRolHandler;
