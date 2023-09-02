import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import styles from './CreateMember.module.css'
import  {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import validate from './Validation'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Select } from '@mui/material';

function FormCreateMember() {
    const dispatch = useDispatch()
    console.log(user)
    const [formUser,setFormUser] = React.useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        privilege:"",
        rolIdRow:[],
        businessId:""
    })
    const [errors,setErrors] = React.useState({})
    console.log(errors)
    const handleOnChange = (event) =>{
        const property = event.target.name
        const value = event.target.value
        setFormUser({
            ...formUser,
            [property]:value
        })
    }


    const onHandleSubmit = (event) =>{
        event.preventDefault()
        const validateErrors = validate(formUser)
        setErrors(validateErrors)
        
        if(Object.keys(validateErrors).length === 0){
            dispatch(createUser(formUser))
        }
    }
    
    console.log(errors)
    console.log(formUser)

    const isNotCompelte = 
    !formUser.name ||
    !formUser.email||
    !formUser.password ||
    !formUser.phone ||
    !formUser.privilege ||
    !formUser.rolIdRow ||
    !formUser.businessId 

    //----------------------Password--------------------------------------------
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // --------------------------Roles------------------------------------------

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
        juan:false
    });

    const handleChange = (event) => {
        setState({
        ...state,
        [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine,juan } = state;
    const error = [gilad, jason, antoine,juan].filter((v) => v).length >= 4 || [gilad, jason, antoine,juan].filter((v) => v).length === 0  ;

    return (
        <div>
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
                        name='email'
                        value={formUser.email}
                        onChange={handleOnChange}
                        helperText={errors.email && <p>{errors.email}</p>}
                        error={errors.email && <p>{errors.email}</p>}
                    />

                    
                    <FormControl sx={{ width: '23rem' }} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                            name='password'
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
                        label="Number"
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
                        required
                        id="outlined-required"
                        label="Business"
                        name='businessId'
                        value={formUser.businessId}
                        onChange={handleOnChange}
                        helperText={errors.businessId && <p>{errors.businessId}</p>}
                        error={errors.businessId && <p>{errors.businessId}</p>}
                    />
                    <Box sx={{ display: 'flex' }}>
                        <FormControl
                            required
                            error={error}
                            component="fieldset"
                            sx={{ m: 3,color:'black' }}
                            variant="standard"
                        >
                        <FormLabel component="legend">Select at least 3</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                                    }
                                    label="Gilad Gray"
                                />
                            </FormGroup>
                        <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                </Box>
                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                        Send
                </Button> 
            </form>
        </div>
    )
}

export default FormCreateMember

