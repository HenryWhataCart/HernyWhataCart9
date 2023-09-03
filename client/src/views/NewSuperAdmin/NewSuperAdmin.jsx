import { FormControl, Box, TextField, Button, Typography } from '@mui/material';

const NewSuperAdmin = () => {
  return (
    <FormControl sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", mt: 5, display: "flex" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
        <div><Typography variant="h4" sx={{color:"gray"}}>{"Create a New Super Admin"}</Typography></div>
      <div><TextField label="Name" variant="outlined" name="name" placeholder="Write your Name here..." required /></div>
      <div><TextField label="Email" variant="outlined" name="email" placeholder="Write your Email here..." required /></div>
      <div><TextField label="Password" variant="outlined" type="password" name="password" placeholder="Write your Password here..." required /></div>
      <div><TextField label="Repeat Password" variant="outlined" type="password" name="repeat" placeholder="Repeat your Password here..." required /></div>
      <div><Button variant="contained"  sx={{color:"grey", bgcolor:"#30EAB5"}}>
          Create
      </Button></div>
      <div><Typography variant="h6" sx={{color:"gray"}}>{"Think Different"}</Typography>
        <Typography variant="body2" sx={{color:"gray"}}>Steve Jobs</Typography></div>
      </Box>
      <Box></Box>
    </FormControl>
  );
}

export default NewSuperAdmin;