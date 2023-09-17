import { useState, useEffect } from "react";
import { useBreakpoints } from "../../hooks/useBreakpoints";
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
  Skeleton,
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
  const isMobile = useBreakpoints();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <TableContainer
      sx={{ maxHeight: "84vh", overflow: "auto", mb: 2, boxShadow: 3 }}
      component={Paper}
    >
      <Table>
        <TableBody>
          {!loading
            ? mockContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                      padding: "25px",
                    }}
                  >
                    <Box display="flex" className={styles.name}>
                      <Avatar alt={contact.name} src="imagen.png" />
                      <Box display="flex" flexDirection="column">
                        <Typography
                          style={{ color: "#808080" }}
                          fontWeight={600}
                        >
                          {contact.name}
                        </Typography>
                        {isMobile && (
                          <Typography
                            style={{ color: "#808080" }}
                            fontWeight={400}
                          >
                            {contact.phoneNumber}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </TableCell>
                  {!isMobile && (
                    <TableCell style={{ padding: "25px" }}>
                      <Typography style={{ color: "#808080" }}>
                        {contact.phoneNumber}
                      </Typography>
                    </TableCell>
                  )}
                  <TableCell style={{ padding: "25px" }}>
                    <Box display="flex" justifyContent="end">
                      <SvgIcon
                        component={QuestionAnswerIcon}
                        fontSize="small"
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            : Array.from(new Array(9)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                      padding: "25px",
                    }}
                  >
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton width="30%" />
                  </TableCell>
                  <TableCell style={{ padding: "25px" }}>
                    <Skeleton width="50%" />
                  </TableCell>
                  <TableCell style={{ padding: "25px" }}>
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
