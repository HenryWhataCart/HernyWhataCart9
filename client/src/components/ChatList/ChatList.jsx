/* eslint-disable react/prop-types */

import {
  Avatar,
  Box,
  Divider,
  Grid,
  Icon,
  List,
  Typography,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ChatList.module.css";
import { setCurrentChat } from "../../redux/actions/CurrentChat/setCurrentChat";
import { useBreakpoints } from "../../hooks/useBreakpoints";

const ChatList = ({ chats, handleChats }) => {
  const dispatch = useDispatch();
  const currentChat = useSelector((state) => state?.currentChat);
  const darkMode = useSelector((state) => state?.darkMode);
  const isMobile = useBreakpoints();

  const handleChatClick = (chat) => {
    dispatch(setCurrentChat(chat))
    handleChats(chat.id, chat.name, chat.phone, chat.notification);
  };

  if (!isMobile || Object.keys(currentChat).length === 0) {
  return (
    <Grid container>
      <Grid
        sx={{
          bgcolor: darkMode ? "#222" : "white",
          borderRadius: 1,
          boxShadow: 1
        }}
        item
        xs={12}
        className={styles.scrollBarStyle}
      >
        <Box sx={{ height: "78.3vh", overflow: "auto" }}>
          <List>
            {chats?.map((chat, index) => (
              <Box key={index}>
                <ListItemButton onClick={() => handleChatClick(chat)}>
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
                        <Avatar
                          sx={{
                            bgcolor: chat?.color,
                            color: darkMode ? "whiteSmoke" : "#4E4E4E",
                          }}
                          alt={chat.name}
                          src="imagen.png"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
                        primary={chat.name}
                        secondary={
                          <Typography
                            variant="body2"
                            color={darkMode ? "#ccc" : "#4E4E4E"}
                          >
                            {chat.phone}
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
  } else {
    return <></>
  }
};

export default ChatList;
