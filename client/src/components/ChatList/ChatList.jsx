/* eslint-disable react/prop-types */

import { Avatar, Box, Divider, Grid, Icon, List, Typography, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import React from 'react';
import { useSelector} from "react-redux";
import styles from './ChatList.module.css'

const ChatList = ({ chats, handleChats }) => {
    const darkMode = useSelector((state) => state?.darkMode);
  // const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    }, [])

    return (
      <Grid container>
        <Grid
          sx={{
            bgcolor: darkMode ? "#222" : "white",
            borderRadius: 1,
          }}
          item
          xs={12}
          className={styles.scrollBarStyle}
        >
          <Box sx={{ height: "79vh", overflow: "auto" }}>
            <List>
              {chats?.map((chat, index) => (
                <Box key={index}>
                  <ListItemButton
                    onClick={() =>
                      handleChats(
                        chat.id,
                        chat.name,
                        chat.phone,
                        chat.notification
                      )
                    }
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor:chat?.color, color: darkMode ? "whiteSmoke" : "#4E4E4E"}} alt={chat.name} src="imagen.png" />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
                          primary={chat.name}
                          secondary={
                            <Typography
                              variant="body2"
                              color={darkMode ? "#ccc" : "#4E4E4E"}
                            >
                              text
                            </Typography>
                          }
                        />
                      </Box>
                      <Box>
                        {chat.notification && (
                          <Icon sx={{ color: "black" }}>
                            <NotificationsActiveRoundedIcon />
                          </Icon>
                        )}
                      </Box>
                    </Box>
                  </ListItemButton>
                  <Divider variant="middle" component="li" />
                </Box>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    );
}

export default ChatList
