/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Dashboard from './views/Dashboard/Dashboard'
import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import { Contacts } from './views/Contacts/Contacts'
import Error from './views/Error/Error'
import { useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Metricas from './views/Metricas/Metricas';

axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  const location = useLocation();
  const showNavBar = location.pathname !== '/' && location.pathname !== '/signout';

  return (
    <div>
      {showNavBar && <NavBar />}
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
            element= {<AuthenticationGuard component={Dashboard} />}
          />

          <Route
          path='/contacts'
          element={<Contacts />}
          />
          
          <Route
          path='/metrics'
          element= {<Metricas/>}
        />

        {/* ROUTE DE Error */}
        <Route
          path='*'
          element= {<Error />}
        />
        
      </Routes>
    </div>
  )
}

export default App
