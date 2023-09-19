/* eslint-disable react-hooks/exhaustive-deps */

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const SignOut = () => {
  const { logout } = useAuth0();

  const signout = () => {
    logout({
      logoutParams: {
        returnTo: "https://whatacart-client.vercel.app/"
      },
    });
  };

  useEffect(() => {
    localStorage.removeItem("loginData");
    signout();
  }, []);
};

export default SignOut;

