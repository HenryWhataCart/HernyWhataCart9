import { Box, Typography } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import { Table,TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Icon } from '@mui/material';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import "./Metricas.module.css"



const Metricas = () => {

  const data = [
    {  company:"Apple",id: 1, name: 'Return to buy', metrica: 70, description: "The people who received the message returned to continue buying" },
    { id: 2, name: 'Offer', metrica: 65, description: "The people who received the message returned to continue buying"},
    { id: 3, name: '2x1', metrica: 28, description: "The people who received the message returned to continue buying" },
    { id: 4, name: 'Offer o New Product', metrica: 43, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
    { id: 5, name: 'Other Offer', metrica: 85, description: "The people who received the message returned to continue buying" },
  ];
  return (
    <Box >
      <div >
        <div  >
          <Box display="flex"   sx={{color:"black", m:2}}>
            <Icon sx={{ color: "black", mx: 1, alignItems:"start"}}><BusinessRoundedIcon/></Icon>
                    Company: Apple
                </Box>
        </div>
        <div >
          <Paper >

            <TableContainer sx={{ height:"70vh",overflow: 'auto', pb: 1 }} component={Paper}>
                    <Table  >
        <TableHead>
          <TableRow>
            <TableCell>Bells</TableCell>
            <TableCell>Metric</TableCell>
             <TableCell>Desciption</TableCell>     
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row) => (
            <TableRow key={row.id} >
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                  <Typography variant="caption" sx={{mr:"-2.2rem"}}>{row.metrica}%</Typography>
                <CircularProgress value={row.metrica} variant="determinate" sx={{ color: "#30EAB5", bgcolor:"transparent", borderRadius:"100%" }} />
                </Box>
              </TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Paper>
  );
      </div>
      </div>
      </Box>
      
    )
}

export default Metricas