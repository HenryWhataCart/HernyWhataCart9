import { useState } from 'react';
import { validate } from './Validate';
import { TextField, Button, Typography, Box } from '@mui/material';

import styles from './BusinessRegistration.module.css'

export const CreateBusiness = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validate(formData);
    setErrors(error)
    };

  const buttonStyles = {
    backgroundColor: "#09E6A7",
    color: "white",     
  };

  return (
    <Box display="flex">
        <form onSubmit={handleSubmit} className={styles.container}>
          <Box display="flex"><Typography variant="h4" align="center" style={{ color: "#4E4E4E" }} fontWeight={500} fontSize="25px" >
              ¡Welcome Business!</Typography>
          </Box>
          <TextField
            label="Business Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.name && <p>{errors.name}</p>}
            error={errors.name && <p>{errors.name}</p>}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.email && <p>{errors.email}</p>}
            error={errors.email && <p>{errors.email}</p>}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.password && <p>{errors.password}</p>}
            error={errors.password && <p>{errors.password}</p>}
          />
          <TextField
            label="Repeat Password"
            variant="outlined"
            type="password"
            name="repeatpassword"
            value={formData.repeatpassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.repeatPassword && <p>{errors.repeatPassword}</p>}
            error={errors.repeatPassword && <p>{errors.repeatPassword}</p>}
          />
          <Button
            variant="contained"
            type="submit"
            style={buttonStyles}
          >
            Create
          </Button>
        </form>
        </Box>
  );
};
