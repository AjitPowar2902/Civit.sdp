import React from 'react'
import NavMenu from '../../components/NavMenu';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const login = location.pathname === '/';
  return (
    <>
    {!login && <NavMenu/>}
    
    <Outlet/>
    </>
  )
}
