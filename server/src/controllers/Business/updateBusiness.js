const { Business } = require("../../db");

const updatedBusiness = async (id, name, phone, email, SuperuserId) => {

        const [updatedCount, updatedRows] = await Business.update(
            { name: name, phone: phone, email: email, SuperuserId: SuperuserId },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('The id was not found or it is incorrect');
        }

    return { message: "updated information" };
};

module.exports = updatedBusiness;
