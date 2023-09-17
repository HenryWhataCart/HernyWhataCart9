import { Box, Button, Typography } from "@mui/material";
import GetDataSuperAdmin from "./getDataSuperAdmin";
import { useNavigate } from "react-router-dom";

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
          <Typography variant="h3" sx={{ color: "grey", marginBottom: 1 }}>
            COMPANIES
          </Typography>
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
                  marginBottom: 2,
                  gap: 2
                }}
              >
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "gray",
                  }}
                >
                  {company.name.toUpperCase()}
                </Typography>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/createmember/${company.id}`)}
                    sx={{
                      fontSize: 13,
                      bgcolor: "#09E6A7",
                      "&:hover": {
                        bgcolor: "#07C292",
                      },
                    }}
                  >
                    members
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => navigate(`/dashboard/${company.id}`)}
                    sx={{
                      fontSize: 13,
                      bgcolor: "#09E6A7",
                      "&:hover": {
                        bgcolor: "#07C292",
                      },
                    }}
                  >
                    chat
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
