const { Business } = require('../../db');

const updatedBusiness = async (id, name, SuperuserId) => {
    try {
        const [updatedCount, updatedRows] = await Business.update(
            { name: name, SuperuserId: SuperuserId },
            { where: { id } }
        );
        if (updatedCount === 0) {
            throw new Error('The id was not found or it is incorrect');
        }
        console.log(updatedRows)
        return { message: 'updated information' };
    } catch (error) {
        console.log('an error occurred while updating business', error);
        throw error;
    }
};

module.exports = updatedBusiness;
