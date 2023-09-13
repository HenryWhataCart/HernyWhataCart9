/* eslint-disable no-unused-vars */

import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard'
import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import { Contacts } from './views/Contacts/Contacts'
import { CreateBusiness } from './components/Forms/FormCreateBusiness/BusinessRegistration';
import Error from './views/Error/Error'
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support'
import FormCreateMember from '../src/components/Forms/FormCreateMember/FormCreateMember';
import Metricas from './views/Metricas/Metricas';
import NavBar from './components/NavBar/NavBar';
import NewSuperAdmin from './views/NewSuperAdmin/NewSuperAdmin';
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import SuperAdmin from './views/SuperAdmin/SuperAdmin';
import Redirect from './views/SuperAdmin/Redirect';

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
            // element= {<AuthenticationGuard component={Dashboard} />}
            element= {<Dashboard />}
          />

          <Route
          path='/contacts'
          // element={<AuthenticationGuard component={Contacts} />}
          element={<Contacts />}
          />

          <Route
          path='/createmember/:businessId/:businessName'
          // element={<AuthenticationGuard component={FormCreateMember} />}
          element={<FormCreateMember />}
          />
        
        <Route
          path='/metrics'
          // element={<AuthenticationGuard component={Metricas} />}
          element={<Metricas />}
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
          element= {<Support />}
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

        {/* <Route
          path='*'
          element= {<Error />}
        /> */}
      </Routes>
      {showFooter && <Footer />}
    </div>
  )
}

export default App