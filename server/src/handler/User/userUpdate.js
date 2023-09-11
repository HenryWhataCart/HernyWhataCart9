const updatedUser = require("../../controllers/User/updateUser");
const userUpdated = async (req, res) => {
  const { id } = req.params;
  const { name, email, password,phone, privilege, businessId } = req.body;
  try {
    if (!id) return res.status(404).json({ error: "id not found" });
    const result = await updatedUser(id, name, email, password,phone,privilege,businessId);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = userUpdated;
