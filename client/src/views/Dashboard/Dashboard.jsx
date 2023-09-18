/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

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

const loginData = JSON.parse(localStorage.getItem("loginData"))
const {id} = loginData
const socket = io("https://whatacart-backend.onrender.com/", {
  query: {
    userId: id
  },
});

const Dashboard = () => {
    const { businessId } = useParams();
    const chats = useSelector(state => state?.chats)
    const [userSelect, setUserSelect] = useState("");
    const messages = useSelector((state) => state?.messages)
    const dispatch = useDispatch();
    const validation = useSelector((state) => state?.validation);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const [actualyChat, setActualyChat] = useState({
      name:"",
      phone:0,
      BusinessId: businessId,
      ContactId: "",
    })

    const handleMessage = (message)=>{
      console.log(message);  
            if(message.from == userSelect){
              console.log("entre");
                dispatch(setMessage(message))
                dispatch(setNotification(message.from,false))
            }else{
                console.log("Hola entre porque no me corresponde el mensaje");
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
        <Box bgcolor={"white"} boxShadow={4}>
          <Grid container sx={{ mb: 2, p: 3 }}>
            <Grid item xs={12} md={4}>
              <Box>
                <ChatList chats={chats} handleChats={handleChats} />
              </Box>
            </Grid>
            {isLargeScreen && (
              <Grid item xs={12} md={8}>
                <Conversation messages={messages} actualyChat={actualyChat} />
              </Grid>
            )}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default Dashboard;
