export const validation = (formData) => {
    let errors = {}

    if(formData.name.length > 30) errors.name = 'Name must be less than 30 characters'

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) errors.email = 'Email must have a valid format'

    if (formData.phone.length > 15) errors.phone = 'Phone must have less than 15 characters'

    return errors
};