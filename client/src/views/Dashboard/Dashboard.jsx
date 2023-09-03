import { Box, Grid } from "@mui/material"
import styles from './Dashboard.module.css'
import ChatList from "../../components/ChatList/ChatList"
import Conversation from "../../components/Conversation/Conversation"

const Dashboard = () => {
    return (
        <Box className={styles.dashboardContainer}>
            <Grid container>
                <Grid item xs={4}>
                    <ChatList />
                </Grid>
                <Grid item xs={8}>
                    <Conversation />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
