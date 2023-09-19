/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from "react-redux";
import { Box, Grid, List, ListItemAvatar, Avatar, ListItemText, Divider, ListItemButton, Skeleton, Typography } from '@mui/material';
import styles from './ChatList.module.css'

const ChatList = ({chats}) => {
    const darkMode = useSelector((state) => state?.darkMode);
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000)   
    }, [])

    return (
            <Grid container >
                <Grid sx={{bgcolor: darkMode ? '#222': "white", mr: 2, boxShadow: 5}} item xs={12} className={styles.scrollBarStyle}>
                     <Box sx={{ height: '84vh', overflow: 'auto'}}>
                        <List>
                {!loading ? chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>{chat.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        sx={{color: darkMode ? 'whiteSmoke' : "#4E4E4E"}} 
                        primary={chat.name} 
                        secondary={
                        <Typography variant="body2" color={darkMode ? '#ccc' : "#4E4E4E"}>
                            {chat.text} 
                        </Typography>
                        }
                    />
                    </ListItemButton>
                    <Divider variant="middle" component="li" />
                </React.Fragment>
                )) : Array.from(new Array(11)).map((_, index) => (
                <React.Fragment key={index}>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Skeleton variant="circular" width={40} height={40} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Skeleton width="80%" />}
                        secondary={<Skeleton width="60%" />}
                    />
                    </ListItemButton>
                    <Divider variant="middle" component="li" />
                </React.Fragment>
                ))}
            </List>
            </Box>
        </Grid>
        </Grid>
    )
}

export default ChatList
