import { Box, Button, Typography } from "@mui/material"
import GetDataSuperAdmin from "./getDataSuperAdmin"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
// import { useAuth0 } from "@auth0/auth0-react"

const SuperAdmin = () => {
    const {companies} = GetDataSuperAdmin()
    const navigate = useNavigate()
    const loginData = JSON.parse(localStorage.getItem("loginData"))
    const darkMode = useSelector((state) => state?.darkMode);

    return (
       <>
        { loginData?.privilege === 'SuperAdmin' ? 
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={darkMode ? "#222" : "whiteSmoke"} boxShadow={3} height={"80vh"} flexDirection={"column"}>
            <Typography variant="h3" sx={{color: darkMode ? "whiteSmoke" : "gray"}}>COMPANIES</Typography>

            {/* //!  POR ACÁ IRÍA LA SEARCHBAR, PARA QUE SE VEA DEBAJO DE "COMPANIES"*/}

            <Box sx={{display:"flex", flexDirection:"column", gap:3, maxHeight:600, overflow:"auto", p:3, bgcolor: darkMode ? "#222" : "whiteSmoke", borderRadius:3}}>
                {companies?.map((company) => (
                    <Box
                        key={company.id} variant="contained"
                        sx={{display: "flex", justifyContent:"space-between", alignItems: "center", bgcolor: darkMode ? "#333" : "whiteSmoke", p:3, borderRadius: 2, boxShadow: 3, flexWrap: "wrap", wordWrap: "break-word"}}>

                        <Typography
                            sx={{fontSize:18, fontWeight:500, color: darkMode ? "whiteSmoke" : "gray"}}>
                            {company.name.toUpperCase()}
                        </Typography>

                        <Box sx={{display: "flex"}}>
                            <Button
                                variant="contained"
                                onClick={() => navigate(`/createmember/${company.id}`)}
                                sx={{fontSize: 13, mx: 0.25}}>
                                members
                            </Button>    
                        </Box>                 
                    </Box>
                ))}
            </Box>
        </Box> : null}
       </>
    )
}

export default SuperAdmin