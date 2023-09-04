import { Box, Grid } from "@mui/material"
import './Dashboard.module.css'
import ChatList from "../../components/ChatList/ChatList"
import Conversation from "../../components/Conversation/Conversation"
import Footer from "../../components/Footer/Footer"

const Dashboard = () => {
    return (
        <Box>
            <Grid container sx={{mb: 2}}>
                <Grid item xs={4}>
                    <ChatList />
                </Grid>
                <Grid item xs={8}>
                    <Conversation />
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}

export default Dashboard
