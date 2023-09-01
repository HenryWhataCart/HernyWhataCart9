import { Box } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import styles from './Dashboard.module.css'
import ChatList from "../../components/ChatList/ChatList"

const Dashboard = () => {

    return (
        <Box className={styles.dashboardContainer}>
            <NavBar />
            <ChatList />
        </Box>
    )
}

export default Dashboard