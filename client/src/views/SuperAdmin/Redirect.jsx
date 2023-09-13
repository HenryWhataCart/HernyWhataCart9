/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const { user } = useAuth0()
    const [loginData, setLoginData] = useState(null)
    const navigate = useNavigate()

    
    
    // const getLoginData = () => {
    //     setLoginData(user['loginData'])
    //     loginData && console.log(loginData);
    //     loginData && localStorage.setItem('loginData', JSON.stringify(loginData))
    // }
    // const conNavigate = () => {
    //     if (loginData?.metadata?.privilege === "SuperAdmin") navigate('/superadmin')
    //     else navigate('/dashboard') // ${loginData.metadata.businessId}/${loginData.metadata.businessName}
    // }


    useEffect(() => {
        if (user) {
            setLoginData(user['loginData'])
            console.log(loginData, "soy el estado local");
        }
    }, [user])

    return (
        <>
        <div>

        </div>
        </>
    )
}

export default Redirect