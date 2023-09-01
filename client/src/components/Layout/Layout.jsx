import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  const location = useLocation();

  const showNavBar = location.pathname !== '/' && location.pathname !== '/signout'

  return (
    <>
      {showNavBar && <NavBar />}
      <Outlet />
    </>
  )
}

export default Layout;