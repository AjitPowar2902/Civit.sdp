import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import PlotRegistration from '../pages/registration/PlotRegistration';

export default function Routers() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/plotregistration' element={<PlotRegistration/>}/>
   </Routes>
   </BrowserRouter>
  )
}
