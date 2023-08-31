const deleteBusiness = require("../../controllers/Business/deleteBusiness");
const deletedBusiness = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(404).json({ error: "invalid id" });
    await deleteBusiness(id);
    return res.status(200).json({ message: "Business deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = deletedBusiness;
