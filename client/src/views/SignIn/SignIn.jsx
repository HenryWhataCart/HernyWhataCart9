/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const SignIn = () => {

  const { loginWithRedirect } = useAuth0()
  const {user} = useAuth0()
  const [loginData, setLoginData] = useState({})
  const [redirectUrl, setRedirectUrl] = useState('/')

  const login = async () => {
    await loginWithRedirect({
      appState: {
      returnTo: '/superadmin',
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
      console.log(loginData)
      // setRedirectUrl(redirect(loginData))
    }

    localStorage.setItem('loginData', JSON.stringify(loginData))

    login()
  }, [user, loginData])
}

export default SignIn 