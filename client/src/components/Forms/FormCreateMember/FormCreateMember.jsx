/* eslint-disable no-unused-vars */
import * as React from "react";

import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import GetDataCreateMember from "./getDataCreateMember";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Select } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import createUser from "../../../redux/actions/User/PostUser";
import deleteUser from "../../../redux/actions/User/deleteUser";
import styles from "./CreateMember.module.css";
import validate from "./Validation";

function FormCreateMember() {

    const { dispatch, roles, user, businessId, businessName} = GetDataCreateMember()

    const [open,setOpen] = React.useState(false)
    const [deleted,setDeleted] = React.useState(false)

  const buttonStyles = {
    background: "#30EAB5",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    padding: "10px 20px",
  };

  const buttonStylesNotSubmit = {
    background: "red",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    padding: "10px 20px",
  };


    const [formUser,setFormUser] = React.useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        privilege:"",
        businessId: businessId
    })
    const [errors,setErrors] = React.useState({})
    const handleOnChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setFormUser({
            ...formUser,
            [property]:value
        })
    }


  const isNotCompelte =
    !formUser.name ||
    !formUser.email ||
    !formUser.password ||
    !formUser.phone ||
    !formUser.privilege ||
    !formUser.businessId;

  //----------------------Password--------------------------------------------
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  //------------------------------------------------------------------------

    const onHandleSubmit = (event) =>{
        event.preventDefault()
        
        dispatch(createUser(formUser))
        setOpen(true)
        setTimeout(() => {
          setFormUser({
            name:"",
            email:"",
            password:"",
            phone:"",
            privilege:"",
            businessId: businessId
        })
      }, 3000);
      setRolCheck(initialRolState);
    };

    const onhandleDelete = (id) =>{
        dispatch(deleteUser(id))
    }

    
    return (
        <div className={styles.containerGeneral}>
          <form onSubmit={onHandleSubmit} className={styles.containerFormMember}>
                <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        name='name'
                        value={formUser.name}
                        onChange={handleOnChange}
                        helperText={errors.name && <p>{errors.name}</p>}
                        error={errors.name && <p>{errors.name}</p>}
                    />

                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  name="email"
                  value={formUser.email}
                  onChange={handleOnChange}
                  helperText={errors.email && <p>{errors.email}</p>}
                  error={errors.email && <p>{errors.email}</p>}
                />

                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    value={formUser.password}
                    onChange={handleOnChange}
                  />
                  <FormHelperText id="outlined-weight-helper-text" error>
                    {errors.password && <p>{errors.password}</p>}
                  </FormHelperText>
                </FormControl>

                    <TextField
                        required
                        id="outlined-number"
                        label="Phone"
                        type="phone"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        name='phone'
                        value={formUser.phone}
                        onChange={handleOnChange}
                        helperText={errors.phone && <p>{errors.phone}</p>}
                        error={errors.phone && <p>{errors.phone}</p>}
                    />
                    <FormControl>
                        <InputLabel htmlFor="outlined-select-currency-native">Privilege</InputLabel>
                        <Select
                            id="outlined-select-currency-native"
                            native
                            label="Privilege"
                            name='privilege'
                            value={formUser.privilege}
                            onChange={handleOnChange}
                        >
                            <option/>
                            <option value="Admin">Admin</option>
                            <option value="Member">Member</option>
                        </Select>
                        {errors.privilege && <FormHelperText error>{errors.privilege}</FormHelperText>}
                    </FormControl>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Company"
                      value={businessName}
                    />
                    
                {isNotCompelte? <Button type='notSubmit' variant="contained" endIcon={<SendIcon />} style={buttonStylesNotSubmit} >
                        Empty fields 
                </Button> : <Button type='submit' variant="contained" endIcon={<SendIcon />} style={buttonStyles}>
                        Send
                </Button> }
                <Snackbar open={open} autoHideDuration={2500} onClose={() => setOpen(false)}>
                    <Alert variant="outlined" severity="success">
                      <Typography>{String(formUser.name)} was created successfully!</Typography>
                    </Alert>
                </Snackbar>
            </form>
            <div className = {styles.containerTable}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3, height:"50vh", width:"35vw"}}>
                        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 , width:"35vw"}}>{"All Users"}</Typography>
                        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw",justifyContent:'center' }} component={Paper}>
                        <Table >
                        <TableBody >
                        {user?.length === 0 ? (
                            <TableRow key="no-users">
                            <TableCell colSpan={3}>
                                <Box className={styles.icon}>
                                    <Icon>
                                        <MoodBadRoundedIcon />
                                    </Icon>
                                    <Typography sx={{ color: "gray", textAlign: "center", fontSize: "1.3rem", mt: 1.5, pb: 1, width: "35vw" }}>
                                        {"There are no registered users"}
                                    </Typography>
                                </Box>
                            </TableCell>
                        </TableRow>
                            ) : (
                            user?.map((users) => (
                                <TableRow key={users.id}>
                                <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box>{users.name}</Box>
                                    <Box>{users.privilege}</Box>
                                    <Box sx={{ display: "flex" }}>
                                    <Box sx={{ cursor: "pointer" }}>
                                        <Icon>
                                        <DeleteForeverRoundedIcon onClick={() => onhandleDelete(users.id)} />
                                        </Icon>
                                    </Box>
                                    </Box>
                                </TableCell>
                                </TableRow>
                            ))
                            )}
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
    )
}

export default FormCreateMember;