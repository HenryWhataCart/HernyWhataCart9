/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const { user } = useAuth0()
    const [loginData, setLoginData] = useState(null)
    const navigate = useNavigate()
    user && console.log(user);
    
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
        // user && setLoginData(user['loginData'])
        // loginData && console.log(loginData)
        // loginData && localStorage.setItem('loginData', JSON.stringify(loginData))
        // loginData && conNavigate()
    }, [])

    return (
        <>
        <div>

        </div>
        </>
    )
}

export default Redirect