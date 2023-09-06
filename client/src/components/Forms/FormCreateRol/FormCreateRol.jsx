/* eslint-disable no-unused-vars */

import { Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import { Icon, Paper, Table, TableBody, TableCell, TableContainer, TableRow, FormControl } from '@mui/material';
import { useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import GetDataCreateRole from './getDataCreateRole';
import SendIcon from '@mui/icons-material/Send';
import createRol from '../../../redux/actions/Rol/postRol';
import deleteRol from '../../../redux/actions/Rol/deleteRol'
import styles from './FormRol.module.css';
import validation from './Validations';

function FormCreateRol() {

        const {roles, dispatch, businessId, businessName} = GetDataCreateRole()
        const [formRol, setFormRol] = useState({
            name: "",   
            businessId: businessId
        });
        
        const [errors, setErrors] = useState({});
        const[open,setOpen]=useState(false)
        const[deleted,setDeleted]=useState(false)
        

        console.log(businessId);
        console.log(roles)
        
        const onHandleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setFormRol({
            ...formRol,
            [property]: value
        });
        }
        
        const onHandleSubmit = (event) => {
            event.preventDefault();
            const validateErrors = validation(formRol);
            setErrors(validateErrors);

        
            if (Object.keys(validateErrors).length === 0) {
                dispatch(createRol(formRol));
                setFormRol({
                    name:"",
                    businessId: businessId
                })
            }
        }
    
        const buttonStyles = {
        background: "#30EAB5",
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bold',
        padding: '10px 20px',
        };
    
        const buttonStylesNotSubmit = {
        background: "red",
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bold',
        padding: '10px 20px',
        };
    
        const isNotComplete = !formRol.name;

        const onhandleDelete = (id) =>{
            dispatch(deleteRol(id))
            setDeleted(true)
        }
    
        return (
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', gap:2}}>
            <FormControl onSubmit={onHandleSubmit} sx={{display:'flex', flexDirection:'column', justifyContent:'center', borderColor:'rgb(215, 213, 213)', borderRadius:3, boxShadow:3, p:5, maxWidth:'200%', bgcolor: 'white'}}>
            <Box className={styles.containerInput} sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:3}}>
                <TextField
                disabled
                id="outlined-disabled"
                label="Company"
                value={businessName}
                />
                <TextField  required id="outlined-required" label="Role Name" name='name' value={formRol.name} onChange={onHandleChange} helperText={errors.name && errors.name}
                error={errors.name && errors.name} />
                {isNotComplete ? <Button type='notSubmit' variant="contained" endIcon={<SendIcon />} style={buttonStylesNotSubmit} >
                Empty fields
                </Button> : <Button type='submit' variant="contained" endIcon={<SendIcon />} style={buttonStyles} onClick={()=>setOpen(true)}>
                Send
                </Button>}
                <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                    <Alert variant="outlined" severity="success">
                        The role was created successfully!
                    </Alert>
                </Snackbar>
            </Box>
            </FormControl>     
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:3, p:2, boxShadow:3, height:"50vh", maxWidth:'200%'}}>
                        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 }}>{"All Roles"}</Typography>
                        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw" }} component={Paper}>
                        <Table  >
                        <TableBody >
                            {roles?.map(rol=>(
                                <TableRow key={rol.id} >
                                    <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box>{rol.name}</Box>
                                        <Box sx={{display:"flex"}}>
                                        <Box sx={{cursor:"pointer"}}>
                                        <Icon><DeleteForeverRoundedIcon onClick={()=>onhandleDelete(rol.id)}></DeleteForeverRoundedIcon></Icon>
                                        </Box>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                            <Snackbar open={deleted} autoHideDuration={3000} onClose={() => setDeleted(false)}>
                                <Alert variant="outlined" severity="warning">
                                    Role removed!
                                </Alert>
                            </Snackbar>
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </Box>          
        </Box>
        );
  }
  
export default FormCreateRol;

