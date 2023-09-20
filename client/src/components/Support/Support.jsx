import { Alert, Snackbar } from "@mui/material";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { validation } from "./validations";

export default function Support() {
  const darkMode = useSelector((state) => state?.darkMode);
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
    
    if(Object.keys(validateErrors).length === 0){
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
    }
  });

  const isNotComplete = !formData.message || !formData.user_email || !formData.user_name

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80%",
        bgcolor: darkMode ? "#292F2D" : "whitesmoke",
        borderRadius: 2,
        p: 2,
        boxShadow: 3,
      }}
    >
      <Box container sx={{bgcolor:  darkMode ? "#222" : "white", boxShadow: 5, p:2, borderRadius:1}}>
        <Box sx={{ mx: "auto", p: 2, width: "400px" }}>
        <Typography variant="h4" align="center" mb={2} color={ darkMode ? "whiteSmoke" : "grey"}>
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
            error={errors.user_name && errors.user_name}
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
            error={errors.user_email && errors.user_email}
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
            error={errors.message && errors.message}
            helperText={errors.message && errors.message}
          />
          <Button
            variant="contained"
            type="submit"
            value="Send"
            disabled={isNotComplete}
            sx={{
              mt: 2,
              alignContent: "center",
              backgroundColor: "#09E6A7",
              color: "white",
              fontWeight: "bold",
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
    </Box>
  );
}