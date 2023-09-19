const { User, Rol } = require("../../db");



const updateUser = async (id, name, email, password,phone,privilege) => {
  
    const updateCount = await User.update(
      { name: name, email: email, password: password,phone:phone ,privilege: privilege},
      { where: { id } }
    );
  
    if (updateCount[0] === 0) {
      throw new Error("the id was not found or it is incorrect");
    }


    return { message: "User information updated successfully" };
  
};
module.exports = updateUser;
