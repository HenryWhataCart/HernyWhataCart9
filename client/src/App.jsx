/* eslint-disable no-unused-vars */

import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import { Contacts } from './views/Contacts/Contacts'
import Dashboard from './views/Dashboard/Dashboard'
import Error from './views/Error/Error'
import Footer from './components/Footer/Footer';
import FormCreateMember from './components/Forms/FormCreateMember/FormCreateMember';
import FormCreateRol from './components/Forms/FormCreateRol/FormCreateRol';
import Metricas from './views/Metricas/Metricas';
import NavBar from './components/NavBar/NavBar';
import NewSuperAdmin from './views/NewSuperAdmin/NewSuperAdmin';
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import Support from './components/Support/Support';
import axios from 'axios'

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
          element={<AuthenticationGuard component={Contacts} />}
          />

          <Route
          path='/createRol'
          element={<FormCreateRol/>}
        />
        
        <Route
          path='/metrics'
          element={<Metricas/>}
        />
        
        <Route
          path='/SuperAdmin'
          element={<NewSuperAdmin/>}
        />
        
        <Route
          path='/support'
          element= {<Support />}
        />

        {/* ROUTE DE Error */}
        <Route
          path='*'
          element= {<Error />}
        />
      </Routes>
      {showNavBar && <Footer />}
    </div>
  )
}

export default App
