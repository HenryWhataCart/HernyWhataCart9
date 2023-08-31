const { Business } = require("../../db");
const deleteBusiness = async (id) => {

    const findBusiness = await Business.findOne({ where: { id } });
    
    if (!findBusiness) throw error("providen id not found");

    await findBusiness.destroy();
    return {message: "Delete success"}
};
module.exports = deleteBusiness;
