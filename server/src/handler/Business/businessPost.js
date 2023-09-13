const createBusiness = require("../../controllers/Business/createBusiness");
const { Business } = require('../../db');

const handlerBusinessPost = async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Required data not found" });
    }

    const existingName = await Business.findOne({ where: { name } });
    const existingPhone = await Business.findOne({ where: { phone } });
    const existingEmail = await Business.findOne({ where: { email } });

    if (existingName || existingPhone || existingEmail) {
      return res.status(400).json({ error: "Name, cell phone or email already exist" });
    }

    const newBusiness = await createBusiness(name, phone, email);

    if (!newBusiness) {
      return res.status(404).json({ error: "Business not found" });
    }

    return res.status(200).json(newBusiness);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handlerBusinessPost;
