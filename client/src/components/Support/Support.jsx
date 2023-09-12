import { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
              "&:hover": {
                animation: "buttonHover 0..s ease-in-out",
                background: "#09e6a77b",
                color: "#0000007b"
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

