import React from 'react';
import { Box, Grid, List, ListItemAvatar, Avatar, ListItemText, Divider, ListItemButton, Skeleton } from '@mui/material';
import styles from './ChatList.module.css'

const chats = [
  { name: 'Chat 1', text: 'Último mensaje del chat 1' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 3', text: 'Último mensaje del chat 3' },
  { name: 'Chat 1', text: 'Último mensaje del chat 1' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 3', text: 'Último mensaje del chat 3' },
  { name: 'Chat 1', text: 'Último mensaje del chat 1' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
]

const ChatList = () => {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000)   
    }, [])

    return (
            <Grid container>
                <Grid sx={{bgcolor: "white", mr: 2}} item xs={12} className={styles.scrollBarStyle}>
                     <Box sx={{ height: '87vh', overflow: 'auto', boxShadow: 1 }}>
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
