import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

import styles from './BusinessRegistration.module.css'

export const BusinessRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const buttonStyles = {
    backgroundColor: "#09E6A7",
    color: "white",     
  };

  return (
        <form onSubmit={handleSubmit} className={styles.container}>
          <Box><Typography variant="h4" align="center" style={{ color: "#4E4E4E" }} fontWeight={500} fontSize="25px" >
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
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
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
          />
          <TextField
            label="Repeat Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            type="submit"
            style={buttonStyles}
          >
            Register
          </Button>
        </form>
  );
};
