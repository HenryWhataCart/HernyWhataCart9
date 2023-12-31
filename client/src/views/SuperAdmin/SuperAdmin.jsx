/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusiness } from "../../redux/actions/Business/getBusiness";

const SuperAdmin = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state?.darkMode);
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [loading, setLoading] = useState(true)
  const companies = useSelector((state) => state?.business)
//   const darkMode = useSelector((state) => state?.darkMode);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBusiness())
  }, [])

  useEffect(() => {
    companies && setLoading(false)
  }, [companies])
  

  return (
    <>
      {loginData?.privilege === "SuperAdmin" ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={ darkMode ? "#292F2D" : "whitesmoke"}
          height={"80vh"}
          flexDirection={"column"}
          mb={4}
        >
          <Box bgcolor={darkMode ? "#222" : "white"} boxShadow={5} m={3} display={"flex"} justifyContent={"center"}
          alignItems={"center"} flexDirection={"column"} p={3} borderRadius={1}>
            <Typography variant="h3" sx={{ color:  darkMode ? "whiteSmoke" : "grey", marginBottom: 1 }}>
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
              mb: 2,
              borderRadius: 2,
            }}
          >
            {loading ? (
              Array.from(new Array(7)).map((_, index) => (
                <Skeleton key={index} variant="rectangular" height={50} />
              ))
            ) : (
              companies?.map((company) => (
                <Box
                  key={company.id}
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor:  darkMode ? "#252525" :  "white",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                      color:  darkMode ? "whiteSmoke" : "gray",
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
              ))
            )}
          </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default SuperAdmin;
