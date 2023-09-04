import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, Typography, Box, Container } from '@mui/material';


const BasicInfo = () => (
  <Card>
    <CardContent >
      <Typography variant="h5" component="div">
        We’re changing the way people think about banking
      </Typography>
      <Typography variant="body1" component="div">
      Chime is a financial technology company founded on the premise that basic banking services should be helpful, easy and free. We want to profit with our members, not from them. That’s why our model doesn’t rely on overdraft fees, monthly service fees, service fees, minimum balance requirements, and more. We partner with regional banks to design member first financial products. This creates a more competitive market with better, lower-cost options for everyday Americans who aren’t being served well by traditional banks. We help drive innovation, inclusion, and access across the industry.
      </Typography>
    </CardContent>
  </Card>
);

  const Description = () => (
    <Card>
      <CardContent>
      <Typography variant="h5" component="div">
        Our mission
      </Typography>
        <Typography variant="body1">
        We created Chime because we believe everyone deserves financial peace of mind. We’re building a new kind of online bank account that helps members get ahead by making managing money easy. It’s your money. It’s your life. Chime in.
        </Typography>
      </CardContent>
    </Card>
  );

  const buttonStyles = {
    backgroundColor: "#09E6A7",
    color: "white",     
  };
  
 export const BusinessView = () => {
   const navigate = useNavigate();

   return (
     <Container>
       <Box>
         <BasicInfo />
       </Box>
       <Box sx={{ marginTop: "20px" }}>
         <Description />
       </Box>
       <Box display="flex" flexDirection="column" alignItems="center" p={2}>
         <Button
           variant="contained"
           href="#contained-buttons"
           style={buttonStyles}
           onClick={() => navigate("/dashboard")}
         >
           Chat with us
         </Button>
       </Box>
       <Typography variant="body2" color="textSecondary">
         Dirección: Calle 123, Ciudad Autónoma de Buenos Aires
       </Typography>
       <Typography variant="body2" color="textSecondary">
         Detalles de contacto: contacto@empresa-logo.com
       </Typography>
     </Container>
   );
 };


  