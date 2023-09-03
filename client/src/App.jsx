/* eslint-disable no-unused-vars */
import FormCreateMember from './components/Forms/FromCreateMember/FormCreateMember';
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios'
import Dashboard from './views/Dashboard/Dashboard'
import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import { Contacts } from './views/Contacts/Contacts'
import Error from './views/Error/Error'
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer"

axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  const location = useLocation();
  const showNavBar = location.pathname !== '/' && location.pathname !== '/signout'
  const showFooter = location.pathname !== '/' && location.pathname !== '/signout' && location.pathname !== '/dashboard'

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
          path='/prueba'
          element={<FormCreateMember/>}
          />

        {/* ROUTE DE Error */}
        <Route
          path='*'
          element= {<Error />}
        />

        <Route
          path='/pruebita'
          element= {<FormCreateMember />}
        />
        
      </Routes>
      {showFooter && <Footer />}
    </div>
  )
}

export default App
