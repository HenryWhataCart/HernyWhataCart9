/* eslint-disable no-unused-vars */

import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setDarkMode } from './redux/actions/DarkMode/darkMode';
import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import { Contacts } from './views/Contacts/Contacts'
import { CreateBusiness } from './components/Forms/FormCreateBusiness/BusinessRegistration';
import Dashboard from './views/Dashboard/Dashboard'
import Error from './views/Error/Error'
import Footer from './components/Footer/Footer';
import FormCreateMember from '../src/components/Forms/FormCreateMember/FormCreateMember';
import NavBar from './components/NavBar/NavBar';
import NewSuperAdmin from './views/NewSuperAdmin/NewSuperAdmin';
import Redirect from './components/Redirect/Redirect';
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import SuperAdmin from './views/SuperAdmin/SuperAdmin';
import Support from '../src/components/Support/Support'

function App() {
  const dispatch = useDispatch();
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  dispatch(setDarkMode(darkMode || false));
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
            path='/dashboard/:businessId'
            // element= {<AuthenticationGuard component={Dashboard} />}
            element= {<Dashboard />}
          />

          <Route
          path='/contacts/:businessId'
          // element={<AuthenticationGuard component={Contacts} />}
          element={<Contacts />}
          />

          <Route
          path='/createmember/:businessId'
          // element={<AuthenticationGuard component={FormCreateMember} />}
          element={<FormCreateMember />}
          />
        
        <Route
          path='/superadmin'
          element={<SuperAdmin />}
          // element={<AuthenticationGuard component={SuperAdmin} />}
        />

        <Route
          path='/createsuperadmin'
          element={<NewSuperAdmin />}
          // element={<AuthenticationGuard component={NewSuperAdmin} />}
        />
        
        <Route
          path='/support'
          element= {< Support/>}
        />

        <Route
          path='/createbusiness'
          // element= {<AuthenticationGuard component={CreateBusiness} />}
          element= {<CreateBusiness />}
        />

        <Route
          path='/redirect'
          // element= {<AuthenticationGuard component={CreateBusiness} />}
          element= {<Redirect />}
        />
        <Route
          path='*'
          element= {<Error />}
        /> 
      </Routes>
      {showFooter && <Footer />}
    </div>
  )
}

export default App