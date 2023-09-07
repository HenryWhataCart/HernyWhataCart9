const searchRolController = require("../../controllers/Rol/searchRol");

const handlerSearchRol = async (req, res) => {
  const { name, businessId } = req.query;
  try {
    const wantedRoles = await searchRolController(name, businessId);
    if (!wantedRoles || wantedRoles.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(wantedRoles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handlerSearchRol;