/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Transition = () => {


    const {user} = useAuth0()
    const [loginData, setLoginData] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const navigateTo = (ruta) => {  
        navigate(ruta)
    } 

    useEffect(() => {

        if (user) {
            setLoginData(user['loginData'])
            console.log(loginData);
            setLoading(false)
            if (loginData?.metadata?.privilege !== "SuperAdmin") navigateTo(`/dashboard`) //${loginData.metadata.businessId}/${loginData.metadata.businessName}
            else navigateTo('/superadmin')
        }

        return () => {
            localStorage.setItem('loginData', JSON.stringify(loginData))
        }
    }, [user, loginData])

    return (
        <>
        {loading ? <h1>loading</h1> : null}
        </>
    )
}

export default Transition