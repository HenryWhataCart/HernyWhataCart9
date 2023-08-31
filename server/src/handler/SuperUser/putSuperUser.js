const updateSuperUser = require("../../controllers/SuperUser/updateSuperUser");

const superUserPut = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    if (!id) return res.status(404).json({ error: "id not found" });
    const updatedSuperuser = await updateSuperUser(id, name, email, password);
    return res.status(200).json(updatedSuperuser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = superUserPut;
