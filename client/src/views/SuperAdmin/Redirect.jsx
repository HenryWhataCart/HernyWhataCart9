/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const {user} = useAuth0()
    const [loginData, setLoginData] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const conNavigate = () => {
        if (loginData?.metadata?.privilege === "SuperAdmin") navigate('/superadmin')
        else navigate('/dashboard') // ${loginData.metadata.businessId}/${loginData.metadata.businessName}
    }

    useEffect(() => {

        if (user) {
            setLoginData(user['loginData'])
            setLoading(false)
            loginData && localStorage.setItem('loginData', JSON.stringify(loginData))

            conNavigate()
        }
    }, [user])

    return (
        <>
        {loading ? <h1>loading</h1> : null}
        </>
    )
}

export default Redirect