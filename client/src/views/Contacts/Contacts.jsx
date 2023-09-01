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
import Navbar from "../../components/NavBar/NavBar";

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
];

export const Contacts = () => {
  return (
    <>
      <Navbar />
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {mockContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1em",
                    padding: "25px",
                  }}
                >
                  <Avatar alt={contact.name} src="imagen.png" />
                  <Typography style={{ fontWeight: "bold" }}>
                    {contact.name}
                  </Typography>
                </TableCell>
                <TableCell style={{ padding: "25px" }}>
                  <Typography style={{ fontWeight: "bold"}}>{contact.phoneNumber}</Typography>
                </TableCell>
                <TableCell style={{ padding: "25px" }}>
                  <Box display="flex" justifyContent="end" >
                    <SvgIcon component={QuestionAnswerIcon} fontSize="small" />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
