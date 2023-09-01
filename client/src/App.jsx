/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Dashboard from './views/Dashboard/Dashboard'
// import { AuthenticationGuard } from "./components/Auth0/AuthenticationGuard/AuthenticationGuard";
import SignIn from './views/SignIn/SignIn'
import SignOut from './components/Auth0/SignOut/SignOut';
import ChatList from './components/ChatList/ChatList';
import { Contacts } from './views/Contacts/Contacts'

axios.defaults.baseURL = 'http://localhost:3001'

function App() {

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

        <Route
        path='/contacts'
        element={<Contacts />}
        />
        
        {/* ROUTE DE PRUEBA */}
        <Route
          path='/prueba'
          element= {<ChatList />}
        />
      </Routes>
    </div>
  )
}

export default App
