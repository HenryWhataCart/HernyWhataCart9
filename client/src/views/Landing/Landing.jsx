import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Landing = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Button onClick={() => navigate('/login')}>SigIn</Button>
        </div>
    )
}

export default Landing