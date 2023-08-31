const { Superuser } = require("../../db");
const updateSuperUser = async (id, name, email, password) => {

    const [updatedCount, updatedRows] = await Superuser.update(
      { name: name, email: email, password: password },
      { where: { id } }
    );
    if (updatedCount === 0) {
      throw new Error("The id was not found or it is incorrect");
    }
    return { message: "Updated Superuser information" };
};

module.exports = updateSuperUser;
