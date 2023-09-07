import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { Box, TextField, Button, Typography } from "@mui/material";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Icon,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useDispatch } from "react-redux";
import { createBusiness } from "../../../redux/actions/Business/createBusiness";
import { useSelector } from "react-redux";
import { getBusiness } from "../../../redux/actions/Business/getBusiness";
import deleteBusiness from "../../../redux/actions/Business/deleteBusiness";
import { validation } from "./validations";
import styles from "./BusinessRegistration.module.css";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
};

export const CreateBusiness = () => {
  const dispatch = useDispatch();
  const business = useSelector((state) => state.business);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getBusiness());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateErrors = validation(formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      dispatch(createBusiness(formData));
      setFormData(EMPTY_FORM);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteBusiness(id));
  };

  const disableSubmitButton = () => {
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.phone.length > 0
    ) {
      return false;
    }
    return true;
  };

  const theme = createTheme({
    palette: {
      customGreen: {
        main: "#09e6a7",
      },
    },
  });

  return (
    <Box display="flex" className={styles.container}>
      <Box className={styles.createContainer}>
        <form onSubmit={handleSubmit}>
          <Box className={styles.createForm}>
            <Box>
              <Typography sx={{ color: "gray", fontSize: "1.3rem" }}>
                New Business
              </Typography>
            </Box>
            
            <Box sx={{ width: "100%"}}>
              <TextField
                label="Business Name"
                variant="outlined"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText={errors.name && errors.name}
                error={Boolean(errors.name)}
              />

              <TextField
                label="Phone"
                variant="outlined"
                name="phone"
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText={errors.phone && errors.phone}
                error={Boolean(errors.phone)}
              />

              <TextField
                label="Email"
                variant="outlined"
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText={errors.email && errors.email}
                error={Boolean(errors.email)}
              />
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                theme={theme}
                color="customGreen"
                sx={{
                  color: "white",
                  bgcolor: "#30EAB5",
                }}
                disabled={disableSubmitButton()}
              >
                Send
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box className={styles.listContainer}>
        <Typography
          sx={{
            color: "gray",
            textAlign: "center",
            fontSize: "1.3rem",
            mt: 1.3,
            pb: 1,
          }}
        >
          {"All Business"}
        </Typography>
        <TableContainer
          sx={{ height: "50vh", overflow: "auto", pb: 1}}
          component={Paper}
        >
          <Table >
            <TableBody>
              {business?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                      </Box>
                      {/* <Box><Icon><EditRoundedIcon onClick={()=>onhandleUpdate(row.id,row.name,row.email,row.password)}></EditRoundedIcon></Icon></Box> */}
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
};
