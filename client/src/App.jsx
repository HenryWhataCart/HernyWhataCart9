/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Dashboard from './views/Dashboard/Dashboard'

//? para implementar a futuro un componente "PageLoader" que se rendereice mientras se realiza la autenticación
// import { useAuth0 } from "@auth0/auth0-react"
// import { PageLoader } from "./components/PageLoader";

import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  //? para implementar a futuro un componente "PageLoader" que se rendereice mientras se realiza la autenticación
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <PageLoader />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element= {<SignIn />}
        />

        <Route
          path='/signout'
          element= {<SignOut />}
        />

        <Route
          path='/dashboard'
          element= {<Dashboard />} //{<AuthenticationGuard component={Dashboard} />}
        />
        
      </Routes>
    </div>
  )
}

export default App
