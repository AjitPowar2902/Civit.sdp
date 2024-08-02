import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import PlotRegistration from '../pages/registration/PlotRegistration';
import Login from '../pages/userdetails/Login';

export default function Routers() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/plotregistration' element={<PlotRegistration/>}/>
   </Routes>
   </BrowserRouter>
  )
}
