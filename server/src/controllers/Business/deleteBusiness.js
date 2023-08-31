const { Business } = require("../../db");
const deleteBusiness = async (id) => {
  try {
    const findBusiness = await Business.findOne({ where: { id } });
    if (!findBusiness) {
      throw error("providen id not found");
    }
    await findBusiness.destroy();
  } catch (error) {
    console.log("Error deleting a business", error);
    throw error;
  }
};
module.exports = deleteBusiness;
