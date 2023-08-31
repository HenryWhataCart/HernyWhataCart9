import { Box } from "@mui/material"
import NavBar from "../../components/NavBar/NavBar"
import styles from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <Box className={styles.dashboardContainer}>
            <NavBar />
        </Box>
    )
}

export default Dashboard