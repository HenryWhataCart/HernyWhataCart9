const { User, Rol } = require("../../db");



const updateUser = async (id, name, email, password,phone,privilege,rolIdRow,businessId) => {
  
    const updateCount = await User.update(
      { name: name, email: email, password: password,phone:phone ,privilege: privilege, BusinessId:businessId},
      { where: { id } }
    );
  
    if (updateCount[0] === 0) {
      throw new Error("the id was not found or it is incorrect");
    }

    if (rolIdRow.length > 0) {
      const updateUser = await User.findByPk(id)
      await updateUser.setRols([])

      for(const rolId of rolIdRow){
        const findRol = await Rol.findOne({where:{id:rolId}});
        await updateUser.addRol(findRol)
      }
    }

    return { message: "User information updated successfully" };
  
};
module.exports = updateUser;
