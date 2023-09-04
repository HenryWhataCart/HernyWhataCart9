import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Error = () => {
    const errorStyles = {
    color: 'gray',      
    fontSize: '55px',   
    marginBottom: '16px',
  };

  const buttonStyles = {
    background: "#30EAB5",  
    color: 'white',
    textTransform: 'none',        
    fontWeight: 'bold',
    padding: '10px 20px',         
  };

  return (
    <div>
       <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h1" style={errorStyles}>
        Error <span style={{ color: "#30EAB5" }}>404</span>
      </Typography>
      <Typography variant="h2" style={errorStyles}>Something happened, page not found</Typography>
      <Link to="/">
        <Button variant="contained" style={buttonStyles}>
          Return to Home Page
        </Button>
      </Link>
    </Box>

    </div>
   
  );
};

export default Error;






