/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const SignIn = () => {

  const { loginWithRedirect } = useAuth0()
  const {user} = useAuth0()
  const [loginData, setLoginData] = useState({})
  const [redirectUrl, setRedirectUrl] = useState('/dashboard')

  const login = async () => {
    await loginWithRedirect({
      appState: {
      returnTo: redirectUrl,
      },
    })
  }

  // const redirect = (data) => {
  //   if (data.metadata.privilege === 'SuperAdmin') return '/superadmin'
  //   else return '/dashboard'
  // }

  useEffect(() => {
    if (user) {
      setLoginData(user['loginData'])
      console.log(loginData, 'vengo de auth0')
      // if (loginData && loginData.metadata) {
      //   setRedirectUrl(redirect(loginData))
      // }
    }
  }, [user])

  useEffect(() => {
    
      localStorage.setItem('loginData', JSON.stringify(loginData))
      const storedLoginData = JSON.parse(localStorage.getItem('loginData'))
      console.log(storedLoginData, 'vengo del localStorage');
      login()

  }, [])
}

export default SignIn 