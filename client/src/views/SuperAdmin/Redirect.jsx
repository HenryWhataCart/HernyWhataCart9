/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = () => {

    const { user } = useAuth0()
    const navigate = useNavigate()
    
    const loginData = user?.loginData?.metadata

    const navigator = () => {
        if (loginData.privilege === "SuperAdmin") navigate('/superadmin')
        else navigate('/dashboard') // ${loginData.metadata.businessId}/${loginData.metadata.businessName}
    }


    useEffect(() => {
        if (loginData) {
            console.log(loginData);
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