import { Typography } from "@mui/material";

export const validate = (formData) => {
    let errors = {}

    if(formData.name.length > 30) errors.name = 'Must be less than 30 characters'

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) errors.email = 'Invalid email'

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
        errors.password = (
            <Typography>
                - At least 8 characters long.<br />
                - At least one capital letter.<br />
                - May contain special characters (e.g., !@#\$%^&*()_+).
            </Typography>
        );
    }

    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }

    return errors
};