import { Box } from "@mui/material"
import styles from './Dashboard.module.css'
import ChatList from "../../components/ChatList/ChatList"

const Dashboard = () => {

    return (
        <Box className={styles.dashboardContainer}>
            <ChatList />
        </Box>
    )
}

export default Dashboard