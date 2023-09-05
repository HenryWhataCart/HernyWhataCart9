const validation = (formRol) =>{
    let errors = {}
    
    if(formRol.name.length >= 30) errors.name = 'role name must be less than 30 characters'

    if(!formRol.businessId) errors.businessId ='Business not found'

    return errors
}

export default validation