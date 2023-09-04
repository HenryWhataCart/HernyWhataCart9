import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        mb:3,
        boxShadow: 3,
      }}
    >
      <Box sx={{  mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2} color="#333">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              alignContent: "center",
              backgroundColor: "#09E6A7",
              color: "white",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}


