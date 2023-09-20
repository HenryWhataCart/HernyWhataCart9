/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import {
  Alert,
  Box,
  Grid,
  IconButton,
  List,
  Paper,
  Snackbar,
  TextField,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@mui/material";
import React, { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const MAX_CHARACTERS = 150;
const Conversation = ({ messages, actualyChat }) => {
  const darkMode = useSelector((state) => state?.darkMode);
  const [expandedMessageIndex, setExpandedMessageIndex] = useState(null);

  const [message, setMessage] = React.useState({
    textMessage: "",
    name: actualyChat.name,
    phone: actualyChat.phone,
    BusinessId: actualyChat.BusinessId,
    ContactId: actualyChat.ContactId,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMessage({
      ...message,
      name: actualyChat.name,
      phone: actualyChat.phone,
      BusinessId: actualyChat.BusinessId,
      ContactId: actualyChat.ContactId,
    });
  }, [actualyChat]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (message.textMessage.trim()) {
      await axios.post("/messageSend", message);
      setMessage({ ...message, textMessage: "" });
    } else {
      setOpen(true);
    }
  };

  const onHandleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  if (messages.length === 0) {
    return (
      <Box
        sx={{
          bgcolor: darkMode ? "#222" : "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 5,
          p: 1,
          height: "77vh",
          overflow: "auto",
          borderRadius: 1,
          mb: 1,
          textAlign: "center",
        }}
      >
        <img
          style={{ height: "20rem", marginBottom: "-5rem" }}
          src="https://i.imgur.com/o9WtJ0W.png"
          alt="imagen laptop"
        />
        <Typography
          variant="h4"
          style={{ color: darkMode ? "whiteSmoke" : "#333" }}
        >
          To send a message you must select a chat
        </Typography>
      </Box>
    );
  }

  if (messages?.length > 0) {
    return (
      <Grid
        container
        sx={{
          bgcolor: darkMode ? "#222" : "white",
          boxShadow: 5,
          borderRadius: 1,
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            height: "75vh",
            overflow: "auto",
            padding: "16px",
            overflowX: "hidden",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              bgcolor: darkMode ? "#292F2D" : "#dddbdb",
              padding: 1,
              borderRadius: 1,
            }}
          >
            <ListItemAvatar>
              <Avatar alt={actualyChat.name} src="imagen.png" />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: darkMode ? "whiteSmoke" : "#4E4E4E" }}
              primary={actualyChat.name}
              secondary={
                <Typography
                  variant="caption"
                  color={darkMode ? "whiteSmoke" : "4E4E4E"}
                >
                  {actualyChat.phone}
                </Typography>
              }
            />
          </Box>

          <List>
            {messages?.map((message, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: message.sent ? "row-reverse" : "row",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      textAlign: message.sent ? "right" : "left",
                      pr: message.sent ? 0 : 1,
                      pl: message.sent ? 1 : 0,
                    }}
                  >
                    <Paper
                      sx={{
                        backgroundColor: message.sent
                          ? "#0cb280"
                          : darkMode
                          ? "#222"
                          : "whiteSmoke",
                        color: message.sent
                          ? "white"
                          : darkMode
                          ? "whiteSmoke"
                          : "#333",
                        padding: "8px 12px",
                        borderRadius: "10px",
                        margin: "4px",
                        alignSelf: message.sent ? "flex-end" : "flex-start",
                        display: "inline-block",
                        maxWidth: "70%",
                        maxHeight:
                          expandedMessageIndex === index ? "none" : "200px",
                        overflowY:
                          expandedMessageIndex === index ? "none" : "auto",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        wordBreak: "break-word",
                      }}
                    >
                      {message.text.length > MAX_CHARACTERS ? (
                        <React.Fragment>
                          {expandedMessageIndex === index ? (
                            message.text
                          ) : (
                            <>
                              {message.text.substring(0, MAX_CHARACTERS)}{" "}
                              <span
                                style={{
                                  cursor: "pointer",
                                  color: message.sent
                                    ? "white"
                                    : darkMode
                                    ? "whiteSmoke"
                                    : "#333",
                                  fontweight: 20,
                                }}
                                onClick={() => setExpandedMessageIndex(index)}
                              >
                                Ver más...
                              </span>
                            </>
                          )}
                        </React.Fragment>
                      ) : (
                        message.text
                      )}
                      <br />
                      <Typography
                        variant="caption"
                        style={{
                          fontSize: "0.8rem",
                          color:
                            darkMode && message.sent
                              ? "whiteSmoke"
                              : !message.sent && "grey",
                        }}
                      >
                        {message.timestamp}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: darkMode ? "#222" : "white",
              padding: "16px",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Write a message..."
              name="textMessage"
              value={message.textMessage}
              onChange={onHandleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(e);
                }
              }}
            />
            <IconButton onClick={handleSendMessage}>
              <SendIcon />
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
              >
                <Alert variant="outlined" severity="error">
                  Cant send empty messages!
                </Alert>
              </Snackbar>
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    );
  } else {
    return <></>;
  }
};

export default Conversation;
