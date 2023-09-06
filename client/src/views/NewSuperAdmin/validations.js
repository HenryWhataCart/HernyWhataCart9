export const validation = (form) =>{
    let errors = {}
    
    if(form.name.length >= 30) errors.name = 'Name must be less than 30 characters'

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) errors.email = 'Email must have a valid format'

    if(form.password.length < 6 ) errors.password = "Password must have at least 6 characters"

    return errors
}
