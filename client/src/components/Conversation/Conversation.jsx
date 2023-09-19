/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from "react-redux";
import { Box, Grid, List, ListItemText, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import styles from './Conversation.module.css'

const Conversation = ({messages}) => {
    const darkMode = useSelector((state) => state?.darkMode);
    const [messageText, setMessageText] = React.useState('');

    const handleSendMessage = () => {
        setMessageText('');
    }

    return (
        <Grid container sx={{bgcolor: darkMode ? "#222" : "white", boxShadow: 5}}>
            <Grid item xs={12} className={styles.scrollBarStyle}>
                <Box sx={{ height:'80vh',overflow:'auto', px :2}}>
                    <List>
                        {messages.map((message,index)=>(
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
                <Box sx={{display:'flex' ,alignItems :'center', bgcolor:"white"}}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Escribe un mensaje..."
                        value={messageText}
                        onChange={(e)=>setMessageText(e.target.value)}
                        onKeyPress={(e)=>{
                            if(e.key==='Enter'){
                                handleSendMessage();
                            }
                        }}
                    />
                    <IconButton onClick={handleSendMessage}>
                        <SendIcon/>
                    </IconButton>
                </Box>
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Conversation
