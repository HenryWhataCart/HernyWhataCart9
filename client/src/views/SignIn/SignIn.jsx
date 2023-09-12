/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const SignIn = () => {

  const { loginWithRedirect } = useAuth0()
  const {user} = useAuth0()
  const [loginData, setLoginData] = useState(null)
  const [redirectUrl, setRedirectUrl] = useState(null)

  const login = async () => {
    await loginWithRedirect({
      appState: {
      returnTo: redirectUrl,
      },
    })
  }

  const redirect = (data) => {
    if (data.metadata.privilege === 'SuperAdmin') return '/superadmin'
    else return '/dashboard'
  }

  useEffect(() => {
    if (user && user['loginData']) {
      setLoginData(user['loginData'])
      console.log(loginData)
      if (loginData && loginData.metadata) {
        setRedirectUrl(redirect(loginData))
      }
    }
  }, [user])

  useEffect(() => {
    if (redirectUrl) {
      localStorage.setItem('loginData', JSON.stringify(loginData))
      login()
    }
  }, [redirectUrl])
}

export default SignIn 