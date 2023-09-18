import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkIfSuperAdmin } from "../../../shared/utils";
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
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { createBusiness } from "../../../redux/actions/Business/createBusiness";
import { getBusiness } from "../../../redux/actions/Business/getBusiness";
import updateBusiness from "../../../redux/actions/Business/putBusiness";
import deleteBusiness from "../../../redux/actions/Business/deleteBusiness";
import { validation } from "./validations";
import styles from "./BusinessRegistration.module.css";

const EMPTY_FORM = {
  id: "",
  name: "",
  email: "",
  phone: "",
  apiKey: "ntt9hywwien4onvunfbgvq3eqa4xahwa",
  srcName: ""
};

export const CreateBusiness = () => {
  const dispatch = useDispatch();
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
      customGreen: {
        main: "#09e6a7",
      },
    },
  });

  return (
    <>
    { isSuperAdmin && (
    <Box display="flex" className={styles.container}>
      <Box className={styles.createContainer}>
        <form onSubmit={handleSubmit}>
          <Box className={styles.createForm}>
            <Box>
              <Typography sx={{ color: "gray", fontSize: "1.3rem" }}>
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
                label="apiKey"
                variant="outlined"
                name="apiKey"
                autoComplete="off"
                value={formData.apiKey}
                // onChange={handleChange}
                fullWidth
                margin="normal"
                disabled
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
          sx={{ height: "50vh", overflow: "auto", pb: 1 }}
          component={Paper}
        >
          <Table>
            <TableBody>
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
                        <Icon>
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
    </>
  );
};
