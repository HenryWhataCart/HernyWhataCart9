/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Button, Icon, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { useBreakpoints } from '../../hooks/useBreakpoints';

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpoints();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSection = () => null
  const handleContacts = () => navigate("/contacts");


  return (
    <AppBar position="relative" sx={{ bgcolor: "white", mb: 1 }}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
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
              onClick={() => navigate("/dashboard")}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Icon sx={{ pb: 1 }}>
                  <SendRoundedIcon />
                </Icon>
                messenger
              </Box>
            </Button>
            <Button
              variant="text"
              color="inherit"
              sx={{ mx: 8, color: "#4E4E4E" }}
              onClick={handleContacts}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Icon sx={{ pb: 1 }}>
                  <ContactsRoundedIcon />
                </Icon>
                contacts
              </Box>
            </Button>
          </Box>
        )}

        {/* MenÃº */}
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
              <Typography variant="body1" fontWeight={600}>Nombre de usuario</Typography>
              <Typography variant="body2">Admin o role</Typography>
            </Box>
          </MenuItem>
          { isMobile && (
            <Box> 
              <MenuItem onClick={() => navigate("/dashboard")}>Messenger</MenuItem>
              <MenuItem onClick={handleContacts}>Contacts</MenuItem>
            </Box>
          )}
          <MenuItem>Manage</MenuItem>
          <MenuItem>Manage company</MenuItem>
          <MenuItem>Metrics</MenuItem>
          <MenuItem onClick={() => navigate("/signout")}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar