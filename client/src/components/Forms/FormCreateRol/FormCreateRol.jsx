import { Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import { Icon, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import SendIcon from '@mui/icons-material/Send';
import createRol from '../../../redux/actions/Rol/postRol';
import deleteRol from '../../../redux/actions/Rol/deleteRol'
import getRol from '../../../redux/actions/Rol/getRol';
import styles from './FormRol.module.css';
import validation from './Validations';

function FormCreateRol() {

        const [formRol, setFormRol] = useState({
            name: "",
            businessId: "8cc1a3e5-a7f8-45a7-956b-0e2ecf470945"
        });
        const [errors, setErrors] = useState({});
        const[open,setOpen]=useState(false)
        const[deleted,setDeleted]=useState(false)
        const dispatch = useDispatch();
        const rols = useSelector(state => state.rol)

        console.log(rols)
        
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
                    businessId: "8cc1a3e5-a7f8-45a7-956b-0e2ecf470945"
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

        useEffect(()=>{
            dispatch(getRol())
        },[dispatch])

        const onhandleDelete = (id) =>{
            dispatch(deleteRol(id))
            setDeleted(true)
        }

    
        return (
        <div className={styles.containerForm}>
            <form className={styles.FormCreateRol} onSubmit={onHandleSubmit}>
            <div className={styles.containerInput}>
                <TextField
                disabled
                id="outlined-disabled"
                label="Business"
                defaultValue={formRol.businessId}
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
            </div>
            </form>
            <div className = {styles.containerTable}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3, height:"50vh"}}>
                        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 }}>{"All Roles"}</Typography>
                        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw" }} component={Paper}>
                        <Table  >
                        <TableBody >
                            {rols.map(rol=>(
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
                            ))}
                            <Snackbar open={deleted} autoHideDuration={3000} onClose={() => setDeleted(false)}>
                                <Alert variant="outlined" severity="warning">
                                    Role removed!
                                </Alert>
                            </Snackbar>
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </Box>
            </div>
            
        </div>
        );
  }
  
export default FormCreateRol;

