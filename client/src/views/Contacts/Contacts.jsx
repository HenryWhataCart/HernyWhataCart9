import { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import styles from "./Contacts.module.css";

const mockContacts = [
  {
    id: 1,
    name: "Nicholas Gordon",
    phoneNumber: "123-456-7890",
  },
  {
    id: 2,
    name: "Bardley Malone",
    phoneNumber: "987-654-3210",
  },
  {
    id: 3,
    name: "Janie Todd",
    phoneNumber: "123-456-7891",
  },
  {
    id: 4,
    name: "Marvin Lambert",
    phoneNumber: "987-654-3211",
  },
  {
    id: 5,
    name: "Teresa Lloyd",
    phoneNumber: "123-456-7892",
  },
  {
    id: 6,
    name: "Fred Haynes",
    phoneNumber: "987-654-3212",
  },
  {
    id: 7,
    name: "Rose Peters",
    phoneNumber: "123-456-7893",
  },
  {
    id: 8,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
  {
    id: 9,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
  {
    id: 10,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
  {
    id: 11,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
  {
    id: 12,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
  {
    id: 13,
    name: "Brian Watson",
    phoneNumber: "987-654-3213",
  },
];

export const Contacts = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const handleResize = () =>
    window.innerWidth >= 720
      ? setShowPhoneNumber(true)
      : setShowPhoneNumber(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TableContainer
      sx={{ maxHeight: "85vh", overflow: "auto" }}
      component={Paper}
      className={styles.scrollBarStyle}
    >
      <Table>
        <TableBody>
          {mockContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell
                style={{
                  alignItems: "center",
                  gap: "1em",
                }}
              >
                <Box display="flex" className={styles.name}>
                  <Avatar alt={contact.name} src="imagen.png" />
                  <Box display="flex" flexDirection="column">
                    <Typography style={{ color: "#4E4E4E" }} fontWeight={600}>
                      {contact.name}
                    </Typography>
                    {!showPhoneNumber && (<Typography style={{ color: "#4E4E4E" }} fontWeight={400}>
                      {contact.phoneNumber}
                    </Typography>)}
                  </Box>
                </Box>
              </TableCell>
              {showPhoneNumber && (
                <TableCell style={{ padding: "25px" }}>
                  <Typography style={{ color: "#4E4E4E" }}>
                    {contact.phoneNumber}
                  </Typography>
                </TableCell>
              )}
              <TableCell style={{ padding: "25px" }}>
                <Box display="flex" justifyContent="end">
                  <SvgIcon component={QuestionAnswerIcon} fontSize="small" />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
