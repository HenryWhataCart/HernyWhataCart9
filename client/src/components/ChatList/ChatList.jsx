/* eslint-disable react/prop-types */

import { Avatar, Box, Divider, Grid, Icon, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import React from 'react';
import styles from './ChatList.module.css'

const ChatList = ({chats, handleChats}) => {

    // const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {  
    }, [])

    return (
            <Grid container>
                <Grid sx={{bgcolor: "white", mr: 2, boxShadow: 5, borderRadius:1}} item xs={12} className={styles.scrollBarStyle}>
                    <Box sx={{ height: '79vh', overflow: 'auto'}}>
                    <List>
                        {chats?.map((chat, index) => (
                            <Box key={index}>
                                <ListItemButton onClick={()=> handleChats(chat.id,chat.name ,chat.phone, chat.notification)}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth: '100%'}}>
                                        <Box display='flex' alignItems='center'>
                                            <ListItemAvatar>
                                                <Avatar>C</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText sx={{color: "#4E4E4E"}} primary={chat.name} secondary="text" />
                                        </Box>
                                        <Box>
                                            {chat.notification && <Icon sx={{color:'black'}}>
                                                <NotificationsActiveRoundedIcon/>
                                            </Icon>
                                            }
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
    )
}

export default ChatList
