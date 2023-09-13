/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const {user} = useAuth0()
    const [loginData, setLoginData] = useState({})
    const [loading, setLoading] = useState(true)
    // const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            setLoginData(user['loginData'])
            console.log(loginData);
            setLoading(false)
            localStorage.setItem('loginData', JSON.stringify(loginData))
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