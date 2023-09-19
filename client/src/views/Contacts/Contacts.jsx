/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Paper, Table, TableRow, TableContainer, TableCell, TableBody, Avatar, Typography, Box, Skeleton } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import styles from "./Contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../redux/actions/Chats/getChats";
import { useParams } from "react-router-dom";

export const Contacts = () => {
  const darkMode = useSelector((state) => state?.darkMode);
  const isMobile = useBreakpoints()
  const [loading, setLoading] = useState(true)
  const contacts = useSelector(state => state?.chats)
  const dispatch = useDispatch()
  const {businessId} = useParams()

  console.log(contacts);

  useEffect(() => {
    !contacts && dispatch(getChats(businessId))
    contacts && setLoading(false)
  }, [contacts])

  return (
    <TableContainer
      sx={{ maxHeight: "84vh", overflow: "auto", mb: 2, boxShadow: 3, bgcolor: darkMode ? '#E0E0E0' : 'whiteSmoke' }}
      component={Paper}
    >
      <Table>
        <TableBody >
          {!loading
            ? contacts?.map((contact) => (
                <TableRow key={contact.id} style={{background: darkMode ? '#222' : 'whiteSmoke'}}>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                      padding: "25px",
                      borderBottomColor: darkMode ? "#333" : "#E0E0E0"
                    }}
                  >
                    <Box display="flex" className={styles.name}>
                      <Avatar alt={contact.name} src="imagen.png" />
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
                          fontWeight={600}
                        >
                          {contact.name}
                        </Typography>
                        {isMobile && (
                          <Typography
                            style={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
                            fontWeight={400}
                          >
                            {contact.phone}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </TableCell>
                  {!isMobile && (
                    <TableCell style={{ padding: "25px", borderBottomColor: darkMode ? "#333" : "#E0E0E0"}}>
                      <Typography style={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}>
                        {contact.phone}
                      </Typography>
                    </TableCell>
                  )}
                  <TableCell style={{ padding: "25px", borderBottomColor: darkMode ? "#333" : "#E0E0E0" }}>
                    <Box display="flex" justifyContent="end">
                      <SvgIcon
                        component={QuestionAnswerIcon}
                        fontSize="small"
                        sx={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            : Array.from(new Array(9)).map((_, index) => (
                <TableRow key={index} style={{backgroundColor: darkMode ? "#222" : "whiteSmoke"}}>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                      padding: "25px",
                      borderBottomColor: darkMode ? "#333" : "#E0E0E0"
                    }}
                  >
                    <Skeleton variant="circular" width={40} height={40}  />
                    <Skeleton width="30%" />
                  </TableCell>
                  <TableCell style={{ padding: "25px", borderBottomColor: darkMode ? "#333" : "#E0E0E0" }}>
                    <Skeleton width="50%" />
                  </TableCell>
                  <TableCell style={{ padding: "25px", borderBottomColor: darkMode ? "#333" : "#E0E0E0" }}>
                    <Box display="flex" justifyContent="end">
                      <Skeleton variant="circular" width={24} height={24} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
