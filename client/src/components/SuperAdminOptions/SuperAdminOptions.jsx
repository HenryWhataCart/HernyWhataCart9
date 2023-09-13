import { useState } from 'react';
import { Box, MenuItem, Menu, Button, Typography } from '@mui/material';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { useNavigate } from 'react-router-dom';

const SuperAdminOptions = () => {
  const [anchorElBusiness, setAnchorElBusiness] = useState(null);
  const [anchorElSuper, setAnchorElSuper] = useState(null);
  const openBusiness = Boolean(anchorElBusiness);
  const openSuper = Boolean(anchorElSuper);
  const navigate = useNavigate();

  const handleClickBusiness = (event) => {
    setAnchorElBusiness(event.currentTarget);
  };

  const handleClickSuper = (event) => {
    setAnchorElSuper(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElBusiness(null);
    setAnchorElSuper(null);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" gap={10} mb={5} height="5rem">
        <Box display="flex" flexDirection="column" textAlign="center">
          <Button
            sx={{ color: "grey" }}
            id="businessButton"
            aria-controls={openBusiness ? 'businessMenu' : undefined}
            aria-haspopup="true"
            aria-expanded={openBusiness ? 'true' : undefined}
            onClick={handleClickBusiness}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4">Companies</Typography>
              <BusinessRoundedIcon fontSize="large" />
            </Box>
          </Button>
          <Menu
            id="businessMenu"
            anchorEl={anchorElBusiness}
            open={openBusiness}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'businessButton',
            }}
          >
            <MenuItem onClick={null}>Show companies</MenuItem>
            <MenuItem onClick={() => navigate("/createbusiness")}>New Company</MenuItem>
          </Menu>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="center">
          <Button
            sx={{ color: "grey" }}
            id="superButton"
            aria-controls={openSuper ? 'superMenu' : undefined}
            aria-haspopup="true"
            aria-expanded={openSuper ? 'true' : undefined}
            onClick={handleClickSuper}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4">Superadmin</Typography>
              <BusinessRoundedIcon fontSize="large" />
            </Box>
          </Button>
          <Menu
            id="superMenu"
            anchorEl={anchorElSuper}
            open={openSuper}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'superButton',
            }}
          >
            <MenuItem onClick={null}>Show companies</MenuItem>
            <MenuItem onClick={null}>New superadmin</MenuItem>
            <MenuItem onClick={null}>asas</MenuItem>
            <MenuItem onClick={null}>sasa</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default SuperAdminOptions;