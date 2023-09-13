import { Box, Button, Typography } from "@mui/material"

import GetDataSuperAdmin from "./getDataSuperAdmin"
import { useNavigate } from "react-router-dom"

// import { useEffect, useState } from "react"
// import { useAuth0 } from "@auth0/auth0-react"

const SuperAdmin = () => {

    const {companies} = GetDataSuperAdmin()
    const navigate = useNavigate()

    
    // const storedLoginData = JSON.parse(localStorage.getItem('loginData'))

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"white"} boxShadow={3} height={"80vh"} flexDirection={"column"}>
            <Typography variant="h3" sx={{color: "grey"}}>COMPANIES</Typography>

            {/* //!  POR ACÁ IRÍA LA SEARCHBAR, PARA QUE SE VEA DEBAJO DE "COMPANIES"*/}

            <Box sx={{display:"flex", flexDirection:"column", gap:3, maxHeight:600, overflow:"auto", p:3, bgcolor:"whitesmoke", borderRadius:3}}>
                {companies?.map((company) => (
                    <Box
                        key={company.id} variant="contained"
                        sx={{display: "flex", justifyContent:"space-between", alignItems: "center", bgcolor: "white", p:3, borderRadius: 2, boxShadow: 3, flexWrap: "wrap", wordWrap: "break-word"}}>

                        <Typography
                            sx={{fontSize:18, fontWeight:500, color:"gray"}}>
                            {company.name.toUpperCase()}
                        </Typography>

                        <Box sx={{display: "flex"}}>
                            <Button
                                variant="contained"
                                onClick={() => navigate(`/createmember/${company.id}/${company.name}`)}
                                sx={{fontSize: 13, mx: 0.25}}>
                                members
                            </Button>    
                        </Box>                 
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default SuperAdmin