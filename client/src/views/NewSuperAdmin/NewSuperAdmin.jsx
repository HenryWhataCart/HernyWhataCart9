import { Box, TextField, Button, Typography} from '@mui/material';
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper, Icon } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { createTheme} from "@mui/material/styles";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postSuperUser} from '../../redux/actions/Superuser/postSuperUser'
import {getSuperUser} from '../../redux/actions/Superuser/GetSuperUser'
import {deleteSuperUser} from '../../redux/actions/Superuser/deleteSuperUser'
import {putSuperUser} from '../../redux/actions/Superuser/putSuperUser'

const NewSuperAdmin = () => {


  const [form,setForm] = useState({
    id: "",
    name: "",
    email: "",
    password:"",
  })

  const [button, setButton] = useState({
    value: "Create"
  })

  const dispatch = useDispatch();
  // const [superUser,setSuperUser] = useState([]) 

  const superUser = useSelector(state=>state.superUser)

  
  useEffect(()=>{
    const getSPUsers = async ()=>{
      await dispatch(getSuperUser())
      // await setSuperUser([...superUser, ...superUsers])
    }
    getSPUsers()
  },[])  

  const theme = createTheme({
  palette: {
    customGreen: {
      main: "#09e6a7",
    },
  },
}); 

const onhandleChange = (event)=>{
  setForm({...form, [event.target.name]:event.target.value})
}

const onhandleSubmit = (event) => {
    event.preventDefault()
    if (button.value === "Create") {
      dispatch(postSuperUser(form))
      setForm({
        name: "",
        email: "",
        password:"",
      })
    }else{
      dispatch(putSuperUser(form.id, form))
      setForm({
        id: "",
        name: "",
        email: "",
        password:"",
      })
      setButton({
        value: "Create"
      })
    }
}

const onhandleDelete=(id)=>{
    dispatch(deleteSuperUser(id))
}

const onhandleUpdate = (id,name,email,password)=>{
  setForm({
    id: id,
    name: name,
    email: email,
    password: password,
  })
  setButton({value:"Modify"})
}


  return (
    <Box  sx={{ display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center", height:"73vh", gap:3 }}>
      <Box  sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3}}>
      <form onSubmit={onhandleSubmit}>
      <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: 'column', gap: 1, height:"50vh"}}>
        <Box><Typography  sx={{color:"gray", fontSize:"1.3rem"}}>{"New Super Admin"}</Typography></Box>
      <Box><TextField 
      onChange={onhandleChange} 
      label="Name" 
      variant="outlined" 
      value={form.name} 
      name="name" 
      autoComplete='off' 
      placeholder="Write your Name here..." 
      required /></Box>

      <Box><TextField 
      label="Email" 
      variant="outlined" 
      name="email" 
      onChange={onhandleChange} 
      value={form.email} 
      autoComplete='off'  
      placeholder="Write your Email here..." 
      required 
      /></Box>
      
      <Box><TextField 
      label="Password" 
      variant="outlined" 
      onChange={onhandleChange} 
      type="password" 
      value={form.password}
      autoComplete='off' 
      name="password" 
      placeholder="Write your Password here..." 
      required  
      /></Box>


      <Box><Button type="submit" variant="contained" theme={theme} color="customGreen"  sx={{color:"white", bgcolor:"#30EAB5"}} value={button.value}>
          {button.value}
      </Button></Box>
          </Box>
      </form>
    </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{bgcolor:"white", borderRadius:2, p:1, boxShadow:3, height:"50vh"}}>
        <Typography  sx={{ color: "gray", textAlign: "center", fontSize:"1.3rem", mt:1.5, pb:1 }}>{"All Super Admin's"}</Typography>
        <TableContainer sx={{ height:"41vh",overflow: 'auto', pb: 1, width:"35vw" }} component={Paper}>
        <Table  >
        <TableBody  >
          {superUser?.map((row) => (
            <TableRow key={row.id} >
              <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>{row.name}</Box>
                <Box>{row.email}</Box>
                <Box sx={{display:"flex"}}>
                  <Box><Icon><DeleteForeverRoundedIcon onClick={()=>onhandleDelete(row.id)}></DeleteForeverRoundedIcon></Icon></Box>
                  <Box><Icon><EditRoundedIcon onClick={()=>onhandleUpdate(row.id,row.name,row.email,row.password)}></EditRoundedIcon></Icon></Box>
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