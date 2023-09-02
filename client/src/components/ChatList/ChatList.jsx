import React from 'react';
import { Box, Grid, List, ListItemAvatar, Avatar, ListItemText, Divider, ListItemButton } from '@mui/material';
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
  { name: 'Chat 3', text: 'Último mensaje del chat 3' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
  { name: 'Chat 3', text: 'Último mensaje del chat 3' },
  { name: 'Chat 2', text: 'Último mensaje del chat 2' },
]

const ChatList = () => {
    return (
        <Grid container>
        <Grid sx={{bgcolor: "white"}} item xs={4} className={styles.scrollBarStyle}>
            <Box sx={{ height: '87vh', overflow: 'auto', borderLeft: "0.1rem solid", boxShadow: 1 }}>
            <List>
                {chats.map((chat, index) => (
                <React.Fragment key={index}>
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>{chat.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText sx={{color: "#4E4E4E"}} primary={chat.name} secondary={chat.text} />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
                ))}
            </List>
            </Box>
        </Grid>
        </Grid>
    )
}

export default ChatList
