import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import TextField from '@mui/material/TextField';
import createRol from '../../../redux/actions/Rol/postRol';
import styles from './FormRol.module.css';
import validation from './Validations';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function FormCreateRol() {
    const [formRol, setFormRol] = useState({
        name: "",
        businessId: ""
        });
        const [errors, setErrors] = useState({});
        const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State para controlar la visibilidad del Alert
        const dispatch = useDispatch();
    
        const onHandleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setFormRol({
            ...formRol,
            [property]: value
        });
        }
    
        const onHandleSubmit = async (event) => {
        event.preventDefault();
        const validateErrors = validation(formRol);
        setErrors(validateErrors);
    
        if (Object.keys(validateErrors).length === 0) {
            await dispatch(createRol(formRol));
            setFormRol({
                name: "",
                businessId: ""
            });
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 5000);
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
    
        return (
        <div className={styles.containerForm}>
            <form className={styles.FormCreateRol} onSubmit={onHandleSubmit}>
            <div className={styles.containerInput}>
                <SupervisedUserCircleRoundedIcon sx={{ fontSize: 48, color: 'black' }} />
                <h2 className={styles.title}>Create role for Business</h2>
                <TextField required id="outlined-required" label="Role Name" name='name' value={formRol.name} onChange={onHandleChange} helperText={errors.name && <p>{errors.name}</p>}
                error={errors.name && <p>{errors.name}</p>} />
                <TextField required id="outlined-required" label="Business" name='businessId' value={formRol.businessId} onChange={onHandleChange} helperText={errors.businessId && <p>{errors.businessId}</p>}
                error={errors.businessId && <p>{errors.businessId}</p>} />
                {isNotComplete ? <Button type='notSubmit' variant="contained" endIcon={<SendIcon />} style={buttonStylesNotSubmit} >
                Empty fields
                </Button> : <Button type='submit' variant="contained" endIcon={<SendIcon />} style={buttonStyles}>
                Send
                </Button>}
                {showSuccessAlert && (
                <Alert variant="outlined" severity="success">
                    The role is registered successfully!
                </Alert>
                )}
            </div>
            </form>
        </div>
        );
  }
  
export default FormCreateRol;

