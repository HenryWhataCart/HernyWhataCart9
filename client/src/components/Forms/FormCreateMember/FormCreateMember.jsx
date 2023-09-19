/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Error from "../../../views/Error/Error";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import GetDataCreateMember from "./getDataCreateMember";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MoodBadRoundedIcon from "@mui/icons-material/MoodBadRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Select } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import createUser from "../../../redux/actions/User/PostUser";
import deleteUser from "../../../redux/actions/User/deleteUser";
import getValidation from "../../../redux/actions/UserValidation/userValidation";
import styles from "./CreateMember.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import validate from "./validations";

function FormCreateMember() {
  const { dispatch, user, businessId } = GetDataCreateMember();

  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const { privilege, businessName } = loginData;

  const buttonStyles = {
    background: "#30EAB5",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    padding: "10px 20px",
  };

  const buttonStylesNotSubmit = {
    background: "black",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    padding: "10px 20px",
  };

  const [formUser, setFormUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    privilege: "",
    businessId: businessId,
  });
  const [errors, setErrors] = useState({});
  const handleOnChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFormUser({
      ...formUser,
      [property]: value,
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = user
    ? user.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const isNotCompelte =
    !formUser.name ||
    !formUser.email ||
    !formUser.password ||
    !formUser.phone ||
    !formUser.privilege ||
    !formUser.businessId;

  //----------------------Password--------------------------------------------
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //------------------------------------------------------------------------

  const onHandleSubmit = (event) => {
    event.preventDefault();

    dispatch(createUser(formUser));
    setOpen(true);
    setTimeout(() => {
      setFormUser({
        name: "",
        email: "",
        password: "",
        phone: "",
        privilege: "",
        businessId: businessId,
      });
    }, 3000);
  };

  const onhandleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const validation = useSelector((state) => state?.validation);

  useEffect(() => {
    dispatch(getValidation(loginData, businessId));
  }, [loginData]);

  return (
    <>
      {validation && privilege !== "Member" ? (
        <div className={styles.containerGeneral}>
          <form
            onSubmit={onHandleSubmit}
            className={styles.containerFormMember}
          >
            <TextField
              required
              id="outlined-name"
              label="Name"
              name="name"
              value={formUser.name}
              onChange={handleOnChange}
              helperText={errors.name && errors.name}
              error={Boolean(errors.name)}
            />

            <TextField
              required
              id="outlined-email"
              label="Email"
              name="email"
              value={formUser.email}
              onChange={handleOnChange}
              helperText={errors.email && errors.email}
              error={Boolean(errors.email)}
            />

            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                value={formUser.password}
                onChange={handleOnChange}
              />
              <FormHelperText id="outlined-weight-helper-text" error>
                {errors.password && errors.password}
              </FormHelperText>
            </FormControl>

            <TextField
              required
              id="outlined-number"
              label="Phone"
              type="phone"
              InputLabelProps={{
                shrink: true,
              }}
              name="phone"
              value={formUser.phone}
              onChange={handleOnChange}
              helperText={errors.phone && errors.phone}
              error={errors.phone && errors.phone}
            />
            <FormControl>
              <InputLabel htmlFor="outlined-select-currency-native">
                Privilege
              </InputLabel>
              <Select
                id="outlined-select-currency-native"
                native
                label="Privilege"
                name="privilege"
                value={formUser.privilege}
                onChange={handleOnChange}
              >
                <option />
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </Select>
              {errors.privilege && (
                <FormHelperText error>{errors.privilege}</FormHelperText>
              )}
            </FormControl>
            <TextField
              disabled
              id="outlined-disabled"
              label="Company"
              value={businessId}
            />

            {isNotCompelte ? (
              <Button
                type="notSubmit"
                variant="contained"
                endIcon={<SendIcon />}
                style={buttonStylesNotSubmit}
              >
                Empty fields
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                style={buttonStyles}
              >
                Send
              </Button>
            )}
            <Snackbar
              open={open}
              autoHideDuration={2500}
              onClose={() => setOpen(false)}
            >
              <Alert variant="outlined" severity="success">
                <Typography>
                  {String(formUser.name)} was created successfully!
                </Typography>
              </Alert>
            </Snackbar>
          </form>
          <Box className={styles.containerTable}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              sx={{
                color: "gray",
                textAlign: "center",
                fontSize: "1.3rem",
                mt: 1.3,
                pb: 1,
              }}
            >
              <Typography
                sx={{
                  color: "gray",
                  textAlign: "center",
                  fontSize: "1.3rem",
                  mt: 1.5,
                  pb: 1,
                  width: "35vw",
                }}
              >
                {"All Users"}
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
                sx={{
                  height: "50vh",
                  overflow: "auto",
                  pb: 1,
                }}
                component={Paper}
              >
                <Table>
                  <TableBody>
                    {user?.length === 0 ? (
                      <TableRow key="no-users">
                        <TableCell colSpan={3}>
                          <Box className={styles.icon}>
                            <Typography
                              sx={{
                                color: "gray",
                                textAlign: "center",
                                fontSize: "1.3rem",
                                mt: 1.5,
                                pb: 1,
                              }}
                            >
                              {"There are no registered users"}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUsers?.map((users) => (
                        <TableRow key={users.id}>
                          <TableCell
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>{users.name}</Box>
                            <Box>{users.privilege}</Box>
                            <Box sx={{ display: "flex" }}>
                              <Box sx={{ cursor: "pointer" }}>
                                <Icon>
                                  <DeleteForeverRoundedIcon
                                    onClick={() => onhandleDelete(users.id)}
                                  />
                                </Icon>
                              </Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                    <Snackbar
                      open={deleted}
                      autoHideDuration={3000}
                      onClose={() => setDeleted(false)}
                    >
                      <Alert variant="outlined" severity="warning">
                        Role removed!
                      </Alert>
                    </Snackbar>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </div>
      ) : null}
    </>
  );
}

export default FormCreateMember;