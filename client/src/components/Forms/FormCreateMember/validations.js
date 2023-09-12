const validation = (formUser) =>{
    let errors = {}

    if(formUser.name.length >30) errors.name = 'Must be less than 30 characters'

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formUser.email)) errors.email = 'Email must have a valid format'

    if(!/^\d{10}$/.test(formUser.phone)) errors.phone = 'Phone must have at least 10 digits'

    if(formUser.privilege.length === 0) errors.privilege ='Must assign at least one privilege'

    if(formUser.businessId.length === 0) errors.businessId = 'Must assign at least one rol' 
    
    return errors
}

export default validation