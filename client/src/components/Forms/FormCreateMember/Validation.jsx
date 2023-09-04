import { Typography } from "@mui/material";

const validate = (formUser) =>{
    let errors = {}

    if(formUser.name.length >30) errors.name = 'Must be less than 30 characters'

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formUser.email)) errors.email = 'invalid email'

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formUser.password)) {
        errors.password = (
            <Typography>
                - At least 8 characters long.<br />
                - At least one capital letter.<br />
                - At least one lowercase letter.<br />
                - At least one digit.<br />
                - May contain special characters (e.g., !@#\$%^&*()_+).
            </Typography>
        );
    }

    if(!/^\d{10}$/.test(formUser.phone)) errors.phone = 'must have at least 10 digits'

    if(formUser.privilege.length === 0) errors.privilege ='must assign at least one privilege'

    if(formUser.rolIdRow.length === 0) errors.rolIdRow = 'must assign at least one rol' 

    if(formUser.businessId.length === 0) errors.businessId = 'must assign at least one rol' 
    
    return errors
}

export default validate