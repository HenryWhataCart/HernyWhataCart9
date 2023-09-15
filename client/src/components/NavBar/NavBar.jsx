import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate  } from "react-router-dom";
import {  useState } from "react";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styles from "./NavBar.module.css";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { checkIfAdmin, checkIfMember, checkIfSuperAdmin } from "../../shared/utils";

const NavBar = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpoints();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  
  const businessId = loginData?.businessId
  const loginName = loginData?.name
  const loginPrivilege = loginData?.privilege

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleContacts = () => navigate("/contacts");
  
  const isMember = checkIfMember(loginData?.privilege);
  const isAdmin = checkIfAdmin(loginData?.privilege);
  const isSuperAdmin = checkIfSuperAdmin(loginData?.privilege)
  
  return (
    <AppBar position="relative" sx={{ bgcolor: "white", mb: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://i.imgur.com/MdR5aac.png"
            alt="Logo"
            height={50}
          />
        </Link>
        {!isMobile && (
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
              <Button
                variant="text"
                color="inherit"
                sx={{ mx: 8, color: "#4E4E4E" }}
                onClick={() => navigate(`/dashboard/${businessId}`)}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Icon sx={{ pb: 1 }}>
                    <SendRoundedIcon />
                  </Icon>
                  Messenger
                </Box>
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ mx: 8, color: "#4E4E4E" }}
                onClick={()=> navigate(`/contacts/${businessId}`)}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Icon sx={{ pb: 1 }}>
                    <ContactsRoundedIcon />
                  </Icon>
                  Contacts
                </Box>
              </Button>
            </Box>
            {!isMember && (
            <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center">
              {!isAdmin && <Button
                variant="text"
                color="inherit"
                sx={{ mx: 8, color: "#4E4E4E" }}
                onClick={() => navigate("/superadmin")}
              >       
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Icon sx={{ pb: 1 }}><BusinessRoundedIcon /></Icon>
                  Companies
                </Box>
              </Button>}
              <Button
                variant="text"
                color="inherit"
                sx={{ mx: 8, color: "#4E4E4E" }}
                onClick={()=> navigate(`/createmember/${businessId}`)}
              >
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Icon sx={{ pb: 1 }}>
                    <PeopleRoundedIcon />
                  </Icon>
                  Members
                </Box>
              </Button>
            </Box>
            )}
          </Box>
        )}
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
                {loginName}
              </Typography>
              <Typography variant="body2">{loginPrivilege}</Typography>
            </Box>
          </MenuItem>
          {isMobile && (
            <Box>
              <MenuItem onClick={() => navigate(`/dashboard/${businessId}`)}>
                Messenger
              </MenuItem>
              <MenuItem onClick={handleContacts}>Contacts</MenuItem>
              {!isMember && 
                (<>
                  {
                    !isAdmin && 
                      <MenuItem onClick={() => navigate("/superadmin")}>
                      Companies
                      </MenuItem>
                  }
                  <MenuItem onClick={()=> navigate(`/createmember/${businessId}`)}>Members</MenuItem>
                </>)
              }
            </Box>
          )}
          {isSuperAdmin && 
            <Box>
            <MenuItem onClick={() => navigate("/metrics")}>Metrics</MenuItem>
            <MenuItem onClick={() => navigate("/createbusiness")}>
              Manage companies
            </MenuItem>
            <MenuItem onClick={() => navigate("/createsuperadmin")}>
              Manage super admin
            </MenuItem>
            </Box>
          }
          <MenuItem onClick={() => navigate("/signout")}>Sign out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
