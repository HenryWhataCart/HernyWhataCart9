/* eslint-disable no-unused-vars */
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const dispatch = useDispatch();
  const darkModeStorage = JSON.parse(localStorage.getItem("darkMode"));
  dispatch(setDarkMode(darkModeStorage || false));
  const darkMode = useSelector((state) => state?.darkMode);
  const location = useLocation()
  const {pathname} = location
  const showNavBar = pathname !== '/' && pathname !== '/signout'
  const showFooter = pathname !== '/' && pathname !== '/signout' && pathname !== '/dashboard'&& pathname !== '/redirect'

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div className={darkMode ? "darkBg" : "lightBg"}>
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
            element= {<AuthenticationGuard component={Dashboard} />}
          />

          <Route
          path='/contacts/:businessId'
          element={<AuthenticationGuard component={Contacts} />}
          />

          <Route
          path='/createmember/:businessId?/:businessName?'
          element={<AuthenticationGuard component={FormCreateMember} />}
          />
        
        <Route
          path='/superadmin'
          element={<AuthenticationGuard component={SuperAdmin} />}
        />

        <Route
          path='/createsuperadmin'
          element={<AuthenticationGuard component={NewSuperAdmin} />}
        />
        
        <Route
          path='/support'
          element= {< Support/>}
        />

        <Route
          path='/createbusiness'
          element= {<AuthenticationGuard component={CreateBusiness} />}
        />

        <Route
          path='/redirect'
          element= {<AuthenticationGuard component={Redirect} />}
        />
        <Route
          path='*'
          element= {<Error />}
        /> 
      </Routes>
      {showFooter && <Footer />}
    </div>
    </ThemeProvider>
  )
}

export default App

