/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Alert, Box, Grid, IconButton, List, ListItemText, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';

import SendIcon from '@mui/icons-material/Send'
import axios from 'axios';
import styles from './Conversation.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Conversation = ({messages,actualyChat}) => {
    const darkMode = useSelector((state) => state?.darkMode);
    const [message, setMessage] = React.useState({
        textMessage:"",
        name: actualyChat.name,
        phone: actualyChat.phone,
        BusinessId: actualyChat.BusinessId,
        ContactId: actualyChat.ContactId
    });
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        setMessage({...message, name: actualyChat.name, phone: actualyChat.phone, BusinessId: actualyChat.BusinessId, ContactId: actualyChat.ContactId,})
    },[actualyChat])

    const handleSendMessage = async (event) => {
        event.preventDefault()
        if (message.textMessage.trim()) {
            await axios.post("/messageSend", message)
            setMessage({...message, textMessage:""});    
        } else {
            setOpen(true)
        }
        
    }

    const onHandleChange = (event)=>{
        setMessage({...message, [event.target.name]:event.target.value})
    }


    if(messages.length === 0){
        return(
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center', p:1}}>
                <img style={{height:'20rem',marginBottom:'-5rem'}} src="../../assets/iconolaptopwhatacart.png" alt="sin mensajes" />
                <h2 style={{color: darkMode ? "whiteSmoke" : '#333'}}>To send a message you must select a chat</h2>
            </Box>
        )
    }
    
    if (messages?.length > 0) {

    return (
        <Grid container sx={{bgcolor: darkMode ? "#222" : "white", boxShadow: 5, borderRadius:1}}>
            <Grid item xs={12} className={styles.scrollBarStyle}>
                <Box sx={{ height:'75vh',overflow:'auto', px :2}}>
                <List>
                        {messages?.map((message,index)=>(
                            <React.Fragment key={index}>
                                <Box sx={{display:'flex'}}>
                                    {!message.sent && (
                                        <Box sx={{flexGrow :1}}>
                                            <ListItemText
                                                secondary={
                                                    <>
                                                        <span style={{color: darkMode ? "whiteSmoke" : '#333'}}>{message.text}</span>
                                                        <br />
                                                        <span style={{fontSize:'0.8rem', color: darkMode ? "#777" : '#999'}}>{message.timestamp}</span>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    )}
                                    {message.sent && <Box sx={{flexGrow: 1}}/>}
                                    {message.sent && (
                                        <Box>
                                            <ListItemText
                                                style={{ textAlign: 'end' }}
                                                secondary={
                                                    <>
                                                        <span style={{color: darkMode ? "whiteSmoke" : '#333'}}>{message.text}</span>
                                                        <br />
                                                        <span style={{fontSize:'0.8rem', color: darkMode ? "#777" : '#999'}}>{message.timestamp}</span>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            <Grid item xs={12}>
            <Box sx={{display:'flex' ,alignItems :'center', bgcolor: darkMode ? "#222" : "white"}}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Write a message..."
                        name='textMessage'
                        value={message.textMessage}
                        onChange={onHandleChange}
                        onKeyPress={(e)=>{
                            if(e.key==='Enter'){
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
                                      Can t send empty messages!
                                    </Alert>
                                  </Snackbar>
                    </IconButton>
                </Box>
          </Grid>
            </Grid>
        </Grid>
    )}else{
        return(
        <Box>
            
        </Box>
    )
    }
    
}

export default Conversation
