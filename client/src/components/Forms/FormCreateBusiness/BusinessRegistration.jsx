import { useState,useEffect } from 'react';
import { validate } from './Validate';
import { Box, TextField, Button, Typography} from '@mui/material';
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper, Icon , TableHead } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import styles from './BusinessRegistration.module.css'
import { useDispatch } from 'react-redux';
import {createBusiness} from '../../../redux/actions/Business/createBusiness'
import {useSelector} from 'react-redux'
import {getBusiness} from '../../../redux/actions/Business/getBusiness'
import deleteBusiness from '../../../redux/actions/Business/deleteBusiness'

export const CreateBusiness = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const business = useSelector(state=>state.business)
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    dispatch(getBusiness())
   },[]) 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const error = validate(formData);
    // setErrors(error)
    dispatch(createBusiness(formData))
      setFormData({
        name: '',
        phone: '',
        email: '',
      });
    };

  const buttonStyles = {
    backgroundColor: "#09E6A7",
    color: "white",     
  };

  const onhandleDelete=(id)=>{
    dispatch(deleteBusiness(id))
}

  return (
    <Box display="flex-wrap">
        <form onSubmit={handleSubmit} className={styles.container}>
          <Box display="flex"><Typography variant="h4" align="center" style={{ color: "#4E4E4E" }} fontWeight={500} fontSize="25px" >
              ¡Welcome Business!</Typography>
          </Box>
          <TextField
            label="Business Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.name && <p>{errors.name}</p>}
            error={errors.name && <p>{errors.name}</p>}
          />

          <TextField
            label="Phone"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.password && <p>{errors.password}</p>}
            error={errors.password && <p>{errors.password}</p>}
          />

          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText={errors.email && <p>{errors.email}</p>}
            error={errors.email && <p>{errors.email}</p>}
          />
          
          <Button
            variant="contained"
            type="submit"
            style={buttonStyles}
          >
            Create
          </Button>
        </form>

        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3}}>
        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 }}>{"All Business"}</Typography>
        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw" }} component={Paper}>
        <Table  >
        <TableBody  >
          {business?.map((row) => (
            <TableRow key={row?.id} >
              <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>{row?.name}</Box>
                <Box sx={{display:"flex"}}>
                  <Box><Icon><DeleteForeverRoundedIcon onClick={()=>onhandleDelete(row?.id)}></DeleteForeverRoundedIcon></Icon></Box>
                  {/* <Box><Icon><EditRoundedIcon onClick={()=>onhandleUpdate(row.id,row.name,row.email,row.password)}></EditRoundedIcon></Icon></Box> */}
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
};
