import { Box, Button, TextField, Typography } from "@mui/material";
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { checkIfSuperAdmin } from "../../../shared/utils";
import { createBusiness } from "../../../redux/actions/Business/createBusiness";
import { createTheme } from "@mui/material/styles";
import deleteBusiness from "../../../redux/actions/Business/deleteBusiness";
import { getBusiness } from "../../../redux/actions/Business/getBusiness";
import styles from "./BusinessRegistration.module.css";
import updateBusiness from "../../../redux/actions/Business/putBusiness";
import { validation } from "./validations";

const API_KEY = import.meta.env.VITE_API_KEY

const EMPTY_FORM = {
  id: "",
  name: "",
  email: "",
  phone: "",
  apiKey: API_KEY,
  srcName: ""
};

export const CreateBusiness = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state?.darkMode);
  const business = useSelector((state) => state?.business);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [button, setButton] = useState({
    value: "Create",
  });

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const isSuperAdmin = checkIfSuperAdmin(loginData?.privilege)

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
      if (button.value === "Create") {
        dispatch(createBusiness(formData));
      } else {
        dispatch(updateBusiness(formData.id, formData));
        setButton({ value: "Create" });
      }
      setFormData(EMPTY_FORM);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteBusiness(id));
    setFormData(EMPTY_FORM);
  };

  const handleUpdate = (id, name, email, phone, apiKey, srcName) => {
    setFormData({
      id: id,
      name: name,
      email: email,
      phone: phone,
      apikey: apiKey,
      srcName: srcName
    });
    setButton({ value: "Modify" });
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBusiness = business
    ? business.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      customGreen: {
        main: "#09e6a7",
      },
    },
  });

  return (
    <>
      <Box sx={{ maxHeight: "84vh", overflow: "auto", mb: 2, boxShadow: 3 }}>
        { isSuperAdmin && (
        <Box display="flex" className={styles.container} style={{backgroundColor: darkMode ? '#292F2D' : 'whiteSmoke'}}>
      <Box className={styles.createContainer} style={{backgroundColor: darkMode ? '#222' : 'whiteSmoke'}}>
        <form onSubmit={handleSubmit}>
          <Box className={styles.createForm}>
            <Box>
              <Typography sx={{ color: darkMode ? "whiteSmoke" : "gray", fontSize: "1.3rem" }}>
                New Business
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
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
              
              <TextField  
                label="srcName"
                variant="outlined"
                name="srcName"
                autoComplete="off"
                value={formData.srcName}
                onChange={handleChange}
                fullWidth
                margin="normal"
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
                value={button.value}
                disabled={disableSubmitButton()}
              >
                {button.value}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box className={styles.listContainer} style={{backgroundColor: darkMode ? '#222' : 'whiteSmoke'}}>
        <Typography
          sx={{
            color: darkMode ? "whiteSmoke" : "gray",
            textAlign: "center",
            fontSize: "1.3rem",
            mt: 1.3,
            pb: 1,
          }}
        >
          {"All Business"}
        </Typography>

        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />

        <TableContainer
          sx={{ height: "50vh", overflow: "auto", pb: 1, backgroundColor: darkMode ? "#222" : "whiteSmoke" }}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
          <Table >
            <TableBody style={{}}>
              {filteredBusiness?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.phone}</Box>
                    <Box>{row?.email}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                      </Box>
                      <Box>
                        <Icon sx={{cursor:'pointer'}}>
                          <EditRoundedIcon
                            onClick={() =>
                              handleUpdate(
                                row?.id,
                                row?.name,
                                row?.email,
                                row?.phone,
                                row?.apikey,
                                row?.srcName
                              )
                            }
                          ></EditRoundedIcon>
                        </Icon>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    )}
      </Box>
    </>
  );
};
