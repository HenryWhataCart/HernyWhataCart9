/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const { user } = useAuth0()
    const navigate = useNavigate()
    
    const loginData = user?.loginData;

    const navigator = () => {
        const {businessId} = loginData
        if (loginData.privilege === "SuperAdmin") navigate('/superadmin')
        else navigate(`/dashboard/${businessId}`)
    }

    useEffect(() => {
        if (loginData) {
            // console.log(loginData)
            localStorage.setItem('loginData', JSON.stringify(loginData))
            navigator()
        }
    }, [loginData])

    return (
        <>
        <div>

        </div>
        </>
    )
}

export default Redirect