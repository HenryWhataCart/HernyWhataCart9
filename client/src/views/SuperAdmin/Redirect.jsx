/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const {user} = useAuth0()
    const [loginData, setLoginData] = useState(null)
    const [loading, setLoading] = useState(true)
    // const navigate = useNavigate()
    let  storedLoginData

    useEffect(() => {

        if (user) {
            setLoginData(user['loginData'])
            loginData && console.log(loginData, "vengo de auth0");
            setLoading(false)
            localStorage.setItem('loginData', JSON.stringify(loginData))
            loginData ? storedLoginData = JSON.parse(localStorage.getItem('loginData')): null
            console.log(storedLoginData, "vengo de localStorage");
            // if (loginData?.metadata?.privilege === "SuperAdmin") navigate('superadmin')
            // else navigate('/dashboard')
            //${loginData.metadata.businessId}/${loginData.metadata.businessName}
        }
    }, [user, loginData])

    return (
        <>
        {loading ? <h1>loading</h1> : null}
        </>
    )
}

export default Redirect