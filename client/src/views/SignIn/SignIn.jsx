import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const SignIn = () => {

  const { loginWithRedirect } = useAuth0()

  const login = async () => {
    await loginWithRedirect({
      appState: {
      returnTo: "/redirect",
      },
    })
  }

  useEffect(() => {
    login()
  }, )
}

export default SignIn