import { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { validation } from "./validations";
import { Snackbar, Alert } from "@mui/material";


export default function Support() {
  const form = useRef();
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
  user_name: "",
  user_email: "",
  message: "",
});
  const [errors, setErrors] = useState({});

  const handleChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [property]:value
        })
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validateErrors = validation(formData);
    setErrors(validateErrors);

 
     emailjs.sendForm('service_krr8fja', 'template_z58x9sl', form.current, 'EIqIk2Ro6IKKfY1B9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    setOpen(true)

    setFormData({
          user_name: "",
          user_email: "",
           message: "",
            })
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
        bgcolor: "white",
        borderRadius: 2,
        p: 1,
        mb: 3,
        boxShadow: 3,
      }}
    >
      <Box sx={{ mx: "auto", p: 2, width: "400px" }}>
        <Typography variant="h4" align="center" mb={2} color="grey">
          ¡Contact Us<br /> or report some bug! 
        </Typography>
        <form ref={form} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            autoComplete="off"
            value={formData.user_name.trim()}
            onChange={handleChange}
            margin="normal"
            required
            helperText={errors.user_name && errors.user_name}
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            autoComplete="off"
            value={formData.user_email.trim()}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
            helperText={errors.user_email && errors.user_email}
          />
          <TextField
            fullWidth
            autoComplete="off"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
            multiline
            rows={4}
            helperText={errors.message && errors.message}
          />
          <Button
            variant="contained"
            type="submit"
            value="Send"
            sx={{
              mt: 2,
              alignContent: "center",
              backgroundColor: "#09E6A7",
              color: "white",
              "&:hover": {
                animation: "buttonHover 0.3s ease-in-out",
                background: "#09e6a77b",
                color: "#0000007b"
              }
            }}
          >
            Submit
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={() => setOpen(false)}
          >
            <Alert variant="outlined" severity="success">
              Email was sent successfully!
            </Alert>
          </Snackbar>
        </form>
      </Box>
    </Box>
  );
}