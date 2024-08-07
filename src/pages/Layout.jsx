import React from 'react'
import NavMenu from '../components/NavMenu'
import { Outlet, useLocation } from 'react-router-dom'
const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/';
  return (
    <>
    {!isLoginPage &&    <NavMenu /> }
    <main>
      <Outlet /> 
    </main>
  </>
  )
}

export default Layout