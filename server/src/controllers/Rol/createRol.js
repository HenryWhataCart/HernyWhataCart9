const { Rol } = require("../../db");
const createRol = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name)
      return res.status(400).json({ error: "Required data not found" });
    const newRol = await Rol.create({
      name: name,
    });
    return res.status(201).json(newRol);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = createRol;
