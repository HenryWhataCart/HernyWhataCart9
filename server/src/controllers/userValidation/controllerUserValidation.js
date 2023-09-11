const { User, Business } = require('../../db');

const controllerValidation = async ({ id, BusinessId }) => {
    if (BusinessId && id) {
        try {
            const validateUser = await User.findOne({ where: { BusinessId, id } });
            const validateBusiness = await Business.findOne({ where: { id: BusinessId } });

            if (!validateBusiness || !validateUser) {
                return {
                    validation: false,
                    message: 'User does not belong to this company'
                };
            }

            if (validateUser.BusinessId === validateBusiness.id) {
                return {
                    validation: true,
                    message: 'User belongs to this company'
                };
            }
            
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    } else {
        throw new Error('Missing parameters');
    }
}

module.exports = controllerValidation;
