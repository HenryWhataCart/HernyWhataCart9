import { FormControl, Box, TextField, Button, Typography} from '@mui/material';
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper, Icon } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { createTheme} from "@mui/material/styles";

const NewSuperAdmin = () => {
    const data = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Ignacio' },
      { id: 3, name: 'Nicole' },
      { id: 4, name: 'Facundo' },
      { id: 5, name: 'Luis' },
      { id: 6, name: 'Valentina' },
      { id: 7, name: 'Matias' },
      { id: 8, name: 'Ivan'}
  ];

  const theme = createTheme({
  palette: {
    customGreen: {
      main: "#09e6a7",
    },
  },
});


  return (
    <Box  sx={{ display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center", height:"73vh", gap:3 }}>
      <Box  sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3}}>
      <FormControl>
      <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: 'column', gap: 1, height:"50vh"}}>
        <Box><Typography  sx={{color:"gray", fontSize:"1.3rem"}}>{"New Super Admin"}</Typography></Box>
      <Box><TextField label="Name" variant="outlined" name="name" autoComplete='off' placeholder="Write your Name here..." required /></Box>
      <Box><TextField label="Email" variant="outlined" name="email" autoComplete='off'  placeholder="Write your Email here..." required /></Box>
      <Box><TextField label="Password" variant="outlined" type="password" autoComplete='off' name="password" placeholder="Write your Password here..." required /></Box>
      <Box><TextField label="Repeat Password" variant="outlined" autoComplete='off' type="password" name="repeat" placeholder="Repeat your Password here..." required /></Box>
      <Box><Button variant="contained" theme={theme} color="customGreen"  sx={{color:"white", bgcolor:"#30EAB5"}}>
          Create
      </Button></Box>
          </Box>
      </FormControl>
    </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3, height:"50vh"}}>
        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 }}>{"All Super Admin's"}</Typography>
        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw" }} component={Paper}>
        <Table  >
        <TableBody  >
          {data.map((row) => (
            <TableRow key={row.id} >
              <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>{row.name}</Box>
                <Box sx={{display:"flex"}}>
                  <Box><Icon><DeleteForeverRoundedIcon></DeleteForeverRoundedIcon></Icon></Box>
                  <Box><Icon><EditRoundedIcon></EditRoundedIcon></Icon></Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Box>
    </Box>
  );
}

export default NewSuperAdmin;