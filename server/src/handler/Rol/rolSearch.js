const searchRolController = require("../../controllers/Rol/searchRol");

const handlerSearchRol = async (req, res) => {
  const { name } = req.query;
  try {
    const wantedRoles = await searchRolController(name);
    if (!wantedRoles || wantedRoles.length === 0) {
      return res.status(404).json({ error: "Roles not found" });
    }
    return res.status(200).json(wantedRoles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handlerSearchRol;
