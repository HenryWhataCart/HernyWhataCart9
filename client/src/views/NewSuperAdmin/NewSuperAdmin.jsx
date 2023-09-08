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
import { createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSuperUser } from "../../redux/actions/Superuser/postSuperUser";
import { getSuperUser } from "../../redux/actions/Superuser/GetSuperUser";
import { deleteSuperUser } from "../../redux/actions/Superuser/deleteSuperUser";
import { putSuperUser } from "../../redux/actions/Superuser/putSuperUser";
import { validation } from "./validations";

import styles from "./NewSuperAdmin.module.css";

const EMPTY_FORM = {
  id: "",
  name: "",
  email: "",
  password: "",
};

const NewSuperAdmin = () => {
  const dispatch = useDispatch();
  const superUser = useSelector((state) => state?.superUser);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [button, setButton] = useState({
    value: "Create",
  });

  useEffect(() => {
    const getSPUsers = async () => {
      await dispatch(getSuperUser());
      // await setSuperUser([...superUser, ...superUsers])
    };
    getSPUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = createTheme({
    palette: {
      customGreen: {
        main: "#09e6a7",
      },
    },
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateErrors = validation(form);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      if (button.value === "Create") {
        dispatch(postSuperUser(form));
      } else {
        dispatch(putSuperUser(form.id, form));
        setButton({ value: "Create" });
      }
      setForm(EMPTY_FORM);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteSuperUser(id));
    setForm(EMPTY_FORM);
  };

  const handleUpdate = (id, name, email, password) => {
    setForm({
      id: id,
      name: name,
      email: email,
      password: password,
    });
    setButton({ value: "Modify" });
  };

  const disableSubmitButton = () => {
    if (
      form.name.length > 0 &&
      form.email.length > 0 &&
      form.password.length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <Box display="flex" className={styles.container}>
      <Box className={styles.createContainer}>
        <form onSubmit={handleSubmit}>
          <Box className={styles.createForm}>
            <Box>
              <Typography sx={{ color: "gray", fontSize: "1.3rem" }}>
                {"New Super Admin"}
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                onChange={handleChange}
                label="Name"
                variant="outlined"
                value={form.name}
                name="name"
                autoComplete="off"
                placeholder="Write your Name here..."
                helperText={errors.name && errors.name}
                error={Boolean(errors.name)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                value={form.email}
                autoComplete="off"
                placeholder="Write your Email here..."
                helperText={errors.email && errors.email}
                error={Boolean(errors.email)}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                onChange={handleChange}
                type="password"
                value={form.password}
                autoComplete="off"
                name="password"
                placeholder="Write your Password here..."
                helperText={errors.password && errors.password}
                error={Boolean(errors.password)}
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
          {"All Super Admin's"}
        </Typography>
        <TableContainer
          sx={{ height: "44vh", overflow: "auto", pb: 1 }}
          component={Paper}
        >
          <Table>
            <TableBody>
              {superUser?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row.name}</Box>
                    <Box>{row.email}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                      </Box>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <EditRoundedIcon
                            onClick={() =>
                              handleUpdate(
                                row.id,
                                row.name,
                                row.email,
                                row.password
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
  );
};
export default NewSuperAdmin;
