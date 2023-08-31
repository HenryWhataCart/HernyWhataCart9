/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSection = () => {
    null
  }

  return (
    <AppBar position="relative" sx={{bgcolor: "transparent"}}>
      <Toolbar>

        <Link to={'https://whatacart.ai/'}>
            <img className={styles.logo} src="../src/assets/whatacart-logo.png" alt="Logo" height={50} />
        </Link>
        
        <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
            <Button variant="text" color="inherit" sx={{ mx: 4, color: "#4E4E4E" }} onClick={handleSection}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Icon sx={{ pb: 1 }}><SendRoundedIcon/></Icon>
                    messenger
                </Box>
            </Button>
            <Button variant="text" color="inherit" sx={{ mx: 8, color: "#4E4E4E" }} onClick={handleSection}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Icon sx={{ pb: 1 }}><ContactsRoundedIcon/></Icon>
                    contacts
                </Box>
            </Button>
        </Box>


        {/* Menú */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{color: "#4E4E4E" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => navigate('/signout')}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}