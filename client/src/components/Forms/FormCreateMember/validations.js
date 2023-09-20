const validate = (formUser) =>{
    let errors = {}

    if(formUser.name.length >30) errors.name = 'Must be less than 30 characters'
    

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formUser.email)) errors.email = 'Email must have a valid format'

    
    if(formUser.privilege.length === 0) errors.privilege ='Must assign at least one privilege'

    
    return errors
}

export default validate