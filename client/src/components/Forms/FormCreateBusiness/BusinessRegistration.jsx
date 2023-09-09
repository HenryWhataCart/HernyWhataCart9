import { useState, useEffect } from "react";
import { validate } from "./Validate";
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

export const CreateBusiness = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const business = useSelector((state) => state.business);
  const [errors, setErrors] = useState({});

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getBusiness());
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...formData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBusiness(formData));
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };

  const onhandleDelete = (id) => {
    dispatch(deleteBusiness(id));
  };

  const buttonStyles = {
    background: "#30EAB5",
    color: "white",
    textTransform: "none",
  };

  const buttonStylesNotSubmit = {
    background: "red",
    color: "white",
    textTransform: "none",
  };

  // Filtrar los negocios según el término de búsqueda
  const filteredBusiness = business.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isNotComplete = errors.name || errors.email || errors.phone;

  console.log(business);

  return (
    <Box
      display="flex"
      gap={2.5}
      m={11}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 1,
          boxShadow: 3,
          height: "60vh",
          width: "29vw",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" sx={{ p: 1, flexDirection: "column" }}>
            <Typography
              variant="h4"
              sx={{
                color: "gray",
                fontSize: "1.5rem",
                textAlign: "center",
                justifyContent: "center",
                mt: 1,
              }}
            >
              New Business
            </Typography>
          </Box>
          <Box sx={{ mt: 0.5, p: 1 }}>
            <TextField
              label="Business Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              helperText={errors.name && <p>{errors.name}</p>}
              error={errors.name && <p>{errors.name}</p>}
            />

            <TextField
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              helperText={errors.phone && <p>{errors.phone}</p>}
              error={errors.phone && <p>{errors.phone}</p>}
            />

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              helperText={errors.email && <p>{errors.email}</p>}
              error={errors.email && <p>{errors.email}</p>}
            />
          </Box>
          <Box sx={{ mb: 1 }}>
            {isNotComplete ? (
              <Button
                type="notSubmit"
                variant="contained"
                style={buttonStylesNotSubmit}
              >
                Empty fields
              </Button>
            ) : (
              <Button type="submit" variant="contained" style={buttonStyles}>
                Send
              </Button>
            )}
          </Box>
        </form>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 1,
          boxShadow: 3,
          alignItems: "center",
          justifyContent: "center",
          pb: 8,
          height: "54vh",
        }}
      >
        <Typography
          sx={{
            color: "gray",
            textAlign: "center",
            fontSize: "1.3rem",
            mt: 1.5,
            pb: 1,
          }}
        >
          {"All Business"}
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          margin="normal"
          sx={{ mb: 2 }}
        />
        <TableContainer
          sx={{ height: "41vh", overflow: "auto", pb: 1, width: "35vw" }}
          component={Paper}
        >
          <Table>
            <TableBody>
              {filteredBusiness.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => onhandleDelete(row?.id)}
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
