import './App.css'
import { Routes, Route } from 'react-router-dom'
// import styles from './App.module.css'
import axios from 'axios'
import LogIn from './views/LogIn/LogIn'
import Landing from './views/Landing/Landing'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element= {<LogIn />}/>
        <Route path='/' element= {<Landing />}/>
      </Routes>
    </div>
  )
}

export default App
