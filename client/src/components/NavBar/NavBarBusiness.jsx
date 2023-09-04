import { useState } from 'react';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Button, Typography } from '@mui/material';
// import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './NavBar.module.css'

export const NavBarBusiness = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpoints();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="relative" sx={{ bgcolor: "white", mb: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"https://whatacart.ai/"}>
          <img
            className={styles.logo}
            src="../src/assets/whatacart-logo.png"
            alt="Logo"
            height={50}
          />
        </Link>

        {!isMobile && (
          <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
            <Button
              variant="text"
              color="inherit"
              sx={{ mx: 8, color: "#4E4E4E" }}
            >
              {/* <Box display="flex" flexDirection="column" alignItems="center">
                <Icon sx={{ pb: 1 }}>
                  <BusinessRoundedIcon />
                </Icon>
                Companies
              </Box> */}
            </Button>
          </Box>
        )}

        {/* Menú */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ color: "#4E4E4E" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem disableRipple onClick={null}>
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Nombre de usuario
              </Typography>
              <Typography variant="body2">Admin o role</Typography>
            </Box>
          </MenuItem>
          {isMobile && (
            <Box>
              <MenuItem>Manage company</MenuItem>
              <MenuItem>Metrics</MenuItem>
            </Box>
          )}
          <MenuItem onClick={() => navigate("/signout")}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
