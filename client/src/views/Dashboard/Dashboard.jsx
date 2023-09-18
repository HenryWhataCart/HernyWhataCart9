/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ChatList from "../../components/ChatList/ChatList";
import Conversation from "../../components/Conversation/Conversation";
import getValidation from "../../redux/actions/UserValidation/userValidation";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const chats = []
const messages = []

const Dashboard = () => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const { businessId } = useParams();
    const dispatch = useDispatch();
    const validation = useSelector((state) => state?.validation);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (loginData && businessId) {
      dispatch(getValidation(loginData, businessId));
    }
  }, [loginData, businessId]);

  return (
    <>
      {validation ? (
        <Box bgcolor={"white"} boxShadow={4}>
          <Grid container sx={{ mb: 2, p: 3 }}>
            <Grid item xs={12} md={4}>
              <Box>
                <ChatList chats={chats} />
              </Box>
            </Grid>
            {isLargeScreen && (
              <Grid item xs={12} md={8}>
                <Conversation messages={messages} />
              </Grid>
            )}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default Dashboard;
