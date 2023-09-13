/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const { user } = useAuth0()
    const navigate = useNavigate()
    

    const navigator = () => {
        if (user?.loginData?.metadata?.privilege === "SuperAdmin") navigate('/superadmin')
        else navigate('/dashboard') // ${loginData.metadata.businessId}/${loginData.metadata.businessName}
    }


    useEffect(() => {
        if (user) {
            localStorage.setItem('loginData', JSON.stringify(user.loginData))
            navigator()
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