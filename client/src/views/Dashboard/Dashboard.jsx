/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Grid } from "@mui/material";
import ChatList from "../../components/ChatList/ChatList";
import Conversation from "../../components/Conversation/Conversation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getValidation from "../../redux/actions/UserValidation/userValidation";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import getMessage from "../../redux/actions/Messages/getMessages";
import setMessage from "../../redux/actions/Messages/setMessagesRealTime";
import {getChats} from '../../redux/actions/Chats/getChats'
import setNotification from "../../redux/actions/Chats/setNotification";
import styles from "./Dashboard.module.css"

const loginData = JSON.parse(localStorage.getItem("loginData"))
const id = loginData?.id
// const socketListen = "https://whatacart-server.onrender.com/"
const socketListen = "https://whatacart-backend.onrender.com/"
const socket = io(socketListen, {
  query: {
    userId: id
  },
});

const Dashboard = () => {
    const { businessId } = useParams();
    const darkMode = useSelector((state) => state?.darkMode);
    const chats = useSelector(state => state?.chats)
    const [userSelect, setUserSelect] = useState("");
    const messages = useSelector((state) => state?.messages)
    const dispatch = useDispatch();
    const validation = useSelector((state) => state?.validation);
    // const theme = useTheme();
    // const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const [actualyChat, setActualyChat] = useState({
      name:"",
      phone:0,
      BusinessId: businessId,
      ContactId: "",
    })

    const handleMessage = (message)=>{
            if(message.from == userSelect){
                dispatch(setMessage(message))
                dispatch(setNotification(message.from,false))
            }else{
                dispatch(setNotification(message.from,true))
            }
    }

    const handleChats = async (id,name,phone,notification) => {
      setActualyChat({...actualyChat, name:name, phone:phone, ContactId:id})
  
      dispatch(getMessage(businessId, id))
      setUserSelect(phone)
      
      if (notification) {
        dispatch(setNotification(phone,false))
      }
  
    }

  useEffect(() => {

    if (loginData && businessId) {
      dispatch(getValidation(loginData, businessId));
    }

    socket.on("message", handleMessage);
  
    if (!userSelect) dispatch(getChats(businessId))

    return ()=>{
      socket.off("message", handleMessage)  
    }
  }, [loginData, businessId, userSelect]);

  return (
    <>
      {validation ? (
        <Box boxShadow={4} style={{backgroundColor: darkMode ? '#292F2D' : 'whiteSmoke'}}>
          <Grid container sx={{ p: 3 }} className={styles.gridContainer}>
            <Grid item xs={12} md={4}>
              <Box>
                <ChatList chats={chats} handleChats={handleChats} />
              </Box>
            </Grid>
            {/* {isLargeScreen && (
              <Grid item xs={12} md={8}>
                <Conversation messages={messages} actualyChat={actualyChat} />
              </Grid>
            )} */}
            <Grid item xs={12} md={8}>
                <Conversation messages={messages} actualyChat={actualyChat} />
              </Grid>
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default Dashboard;
