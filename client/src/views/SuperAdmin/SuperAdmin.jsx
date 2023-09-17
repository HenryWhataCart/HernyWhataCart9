import { Box, Button, Typography } from "@mui/material";
import GetDataSuperAdmin from "./getDataSuperAdmin";
import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react"

const SuperAdmin = () => {
  const { companies } = GetDataSuperAdmin();
  const navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem("loginData"));

  return (
    <>
      {loginData?.privilege === "SuperAdmin" ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"white"}
          boxShadow={3}
          height={"80vh"}
          flexDirection={"column"}
        >
          <Typography variant="h3" sx={{ color: "grey", marginBottom: "2rem" }}>
            COMPANIES
          </Typography>

          {/* //!  POR ACÁ IRÍA LA SEARCHBAR, PARA QUE SE VEA DEBAJO DE "COMPANIES"*/}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              maxHeight: 600,
              overflow: "auto",
              p: 3,
              bgcolor: "whitesmoke",
              borderRadius: 2,
            }}
          >
            {companies?.map((company) => (
              <Box
                key={company.id}
                variant="contained"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgcolor: "white",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  flexWrap: "wrap",
                  wordWrap: "break-word",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "gray",
                    marginBottom: "0.5rem",
                  }}
                >
                  {company.name.toUpperCase()}
                </Typography>

                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/createmember/${company.id}`)}
                    sx={{
                      fontSize: 13,
                      mx: 0.25,
                      bgcolor: "#09E6A7",
                      "&:hover": {
                        bgcolor: "#07C292",
                      },
                    }}
                  >
                    members
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default SuperAdmin;
