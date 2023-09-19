import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import LogoError from '../../assets/whatacart-ErrorLogo.png'

const Error = () => {
  const darkMode = useSelector((state) => state?.darkMode);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const errorStyles = {
    color:  darkMode ? 'whiteSmoke' : 'gray',
    fontSize: isSmallScreen ? '40px' : '55px',
    marginBottom: isSmallScreen ? '8px' : '16px',
    textAlign: 'center',
  };

  const buttonStyles = {
    background: "#30EAB5",
    color: 'black',
    textTransform: 'none',
    padding: '10px 20px',
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={isSmallScreen ? '16px' : '32px'}
      boxShadow={4}
      bgcolor={ darkMode ? "#292F2D" : "whitesmoke"}
    >
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img
            src={LogoError}
            alt="Logo Error"
            height={250}
          />
        </Grid>
        <Grid item>
          <Typography variant={isSmallScreen ? "h3" : "h1"} style={errorStyles}>
            Error <span style={{ color: "#30EAB5" }}>404</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={isSmallScreen ? "h4" : "h2"} style={errorStyles}>
            Something happened, page not found
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/">
            <Button variant="contained" style={buttonStyles}>
              Return to Home Page
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Error;