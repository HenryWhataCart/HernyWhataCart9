import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Transition = () => {

    
    const {user} = useAuth0()
    const [loginData, setLoginData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            setLoginData(user['loginData'])
            loginData.metadata.privilege !== "SuperAdmin" && navigate(`/dashboard/${businessId}/${businessName}`)
        }

        return () => {
            localStorage.setItem('loginData', JSON.stringify(loginData))
        }
    }, [user, loginData])
}



export default Transition