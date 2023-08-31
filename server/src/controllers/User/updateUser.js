const { User } = require("../../db");
const updateUser = async (id, name, email, password, privilege,businessId) => {
  
    const updateCount = await User.update(
      { name: name, email: email, password: password, privilege: privilege, BusinessId:businessId},
      { where: { id } }
    );
    if (updateCount[0] === 0) {
      throw new Error("the id was not found or it is incorrect");
    }
    return { message: "User information updated successfully" };
  
};
module.exports = updateUser;
