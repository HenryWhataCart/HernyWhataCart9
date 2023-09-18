/* eslint-disable react/prop-types */

import { Avatar, Box, Divider, Grid, List, ListItemAvatar, ListItemButton, ListItemText, Skeleton } from '@mui/material';

import React from 'react';
import styles from './ChatList.module.css'

const ChatList = ({chats}) => {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000)   
    }, [])

    return (
            <Grid container onClick={()=> console.log('Hola soy el chat')}>
                <Grid sx={{bgcolor: "white", mr: 2, boxShadow: 5}} item xs={12} className={styles.scrollBarStyle}>
                    <Box sx={{ height: '84vh', overflow: 'auto'}}>
                        <List>
                {!loading ? chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>{chat.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText sx={{color: "#4E4E4E"}} primary={chat.name} secondary={chat.text} />
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
