import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";

const SignOut = () => {

  const { logout } = useAuth0();

  const signout = () => {
    logout({
      logoutParams: {
        returnTo: "https://herny-whata-cart9.vercel.app/",
      },
    })
  }

  useEffect(() => {
    signout()
  }, ) 
}

export default SignOut