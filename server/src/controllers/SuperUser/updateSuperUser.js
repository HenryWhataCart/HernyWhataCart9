const { Superuser } = require("../../db");
const updateSuperUser = async (id, name, email, password) => {
  try {
    const [updatedCount, updatedRows] = await Superuser.update(
      { name: name, email: email, password: password },
      { where: { id } }
    );
    if (updatedCount === 0) {
      throw new Error("The id was not found or it is incorrect");
    }
    return { message: "Updated Superuser information" };
  } catch (error) {
    console.log("An error occurred while updating Superuser", error);
    throw error;
  }
};

module.exports = updateSuperUser;
