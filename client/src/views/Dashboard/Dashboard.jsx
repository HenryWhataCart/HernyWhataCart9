/* eslint-disable react-hooks/exhaustive-deps */

import './Dashboard.module.css'

import { Box, Grid } from "@mui/material"

import ChatList from "../../components/ChatList/ChatList"
import Conversation from "../../components/Conversation/Conversation"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import getValidation from '../../redux/actions/UserValidation/userValidation'
import { useDispatch, useSelector } from 'react-redux'

const chats = [
    { name: 'Chat 1', text: 'Último mensaje del chat 1' },
    { name: 'Chat 2', text: 'Último mensaje del chat 2' },
    { name: 'Chat 3', text: 'Último mensaje del chat 3' },
    { name: 'Chat 4', text: 'Último mensaje del chat 4' },
    { name: 'Chat 5', text: 'Último mensaje del chat 5' },
    { name: 'Chat 6', text: 'Último mensaje del chat 6' },
    { name: 'Chat 7', text: 'Último mensaje del chat 7' },
    { name: 'Chat 8', text: 'Último mensaje del chat 8' },
    { name: 'Chat 9', text: 'Último mensaje del chat 9' },
    { name: 'Chat 10', text: 'Último mensaje del chat 10' },
    { name: 'Chat 11', text: 'Último mensaje del chat 11' },
    { name: 'Chat 12', text: 'Último mensaje del chat 12' },
    { name: 'Chat 13', text: 'Último mensaje del chat 13' },
    { name: 'Chat 14', text: 'Último mensaje del chat 14' },
    { name: 'Chat 15', text: 'Último mensaje del chat 15' },
    { name: 'Chat 16', text: 'Último mensaje del chat 16' },
    { name: 'Chat 17', text: 'Último mensaje del chat 17' },
    { name: 'Chat 18', text: 'Último mensaje del chat 18' },
    { name: 'Chat 19', text: 'Último mensaje del chat 19' },
    { name: 'Chat 20', text: 'Último mensaje del chat 20' },
  ]

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
    { name: 'Juan', text: 'Hola, ¿cómo estás?', timestamp: '10:00 AM', sent:true},
    { name:'Pedro',text:'Bien,gracias.¿Y tú?',timestamp:'10 :05AM',sent:false},
    {name:'Juan',text:'También bien,gracias.',timestamp:'10 :10AM',sent:true},
  ]

const Dashboard = () => {

    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const {businessId} = useParams()
    const dispatch = useDispatch()
    const validation = useSelector((state) => state?.validation)

    validation && console.log(validation);
    businessId && console.log(businessId, 'vengo de params');
    loginData && console.log(loginData)
    
    useEffect(() => {
        if (loginData && businessId) {
            dispatch(getValidation(loginData, businessId))
        }
    }, [loginData, businessId])

    return (
        <>
            { validation ? <Box>
                <Grid container sx={{mb: 2}}>
                    <Grid item xs={4}>
                        <ChatList chats={chats}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Conversation messages={messages}/>
                    </Grid>
                </Grid>
            </Box> : null}
        </>
    )
}

export default Dashboard
