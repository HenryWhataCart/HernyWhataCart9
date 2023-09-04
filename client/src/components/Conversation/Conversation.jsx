import React from 'react';
import { Box, Grid, List, ListItemText, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './Conversation.module.css'

const messages = [
  { name: 'Juan', text: 'dasdadaff', timestamp: '10:00 AM', sent: true },
  { name: 'Pedro', text: 'afadasdas?', timestamp: '10:05 AM', sent: false },
  { name: 'Juan', text: 'sdafdfafadfadsasdgh', timestamp: '10:10 AM', sent: true },
  { name: 'Juan', text: 'fghfdghdhd', timestamp: '10:00 AM', sent: true },
  { name: 'Pedro', text: 'hdfhgfdgdfgdf?', timestamp: '10:05 AM', sent: false },
  { name: 'Juan', text: 'También bien, gracias.', timestamp: '10:10 AM', sent: true },
  { name: 'Juan', text: 'Hola, ¿cómo estás?', timestamp: '10:00 AM', sent: true },
  { name: 'Pedro', text: 'Bien, gracias. ¿Y tú?', timestamp: '10:05 AM', sent: false },
  { name: 'Juan', text: 'También bien, gracias.', timestamp: '10:10 AM', sent: true },
  { name: 'Juan', text: 'Hola, ¿cómo estás?', timestamp: '10:00 AM', sent:true},
  { name:'Pedro',text:'Bien,gracias.¿Y tú?',timestamp:'10 :05AM',sent:false},
  {name:'Juan',text:'También bien,gracias.',timestamp:'10 :10AM',sent:true},
  { name: 'Juan', text: 'Hola, ¿cómo estás?', timestamp: '10:00 AM', sent: true },
  { name: 'Pedro', text: 'Bien, gracias. ¿Y tú?', timestamp: '10:05 AM', sent: false },
  { name: 'Juan', text: 'También bien, gracias.', timestamp: '10:10 AM', sent: true },
  { name: 'Juan', text: 'Hola, ¿cómo estás?', timestamp: '10:00 AM', sent:true},
  { name:'Pedro',text:'Bien,gracias.¿Y tú?',timestamp:'10 :05AM',sent:false},
  {name:'Juan',text:'También bien,gracias.',timestamp:'10 :10AM',sent:true},
]

const Conversation = () => {
    const [messageText, setMessageText] = React.useState('');

    const handleSendMessage = () => {
        // Aquí puedes agregar lógica para enviar el mensaje
        setMessageText('');
    }

    return (
        <Grid container sx={{bgcolor:"white"}}>
            <Grid item xs={12} className={styles.scrollBarStyle}>
                <Box sx={{ height:'83vh',overflow:'auto', px :2}}>
                    <List>
                        {messages.map((message,index)=>(
                            <React.Fragment key={index}>
                                <Box sx={{display:'flex'}}>
                                    {!message.sent && (
                                        <Box sx={{flexGrow :1}}>
                                            <ListItemText
                                                sx={{color: "#999"}}
                                                secondary={
                                                    <>
                                                        <span>{message.text}</span>
                                                        <br />
                                                        <span style={{fontSize:'0.8rem' ,color:'#999'}}>{message.timestamp}</span>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    )}
                                    {message.sent && <Box sx={{flexGrow: 1}}/>}
                                    {message.sent && (
                                        <Box>
                                            <ListItemText
                                                sx={{color: "#999"}}
                                                secondary={
                                                    <>
                                                        <span>{message.text}</span>
                                                        <br />
                                                        <span style={{fontSize:'0.8rem', color:'#999'}}>{message.timestamp}</span>
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
            </Grid>
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
    )
}

export default Conversation
