import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import PlotRegistration from '../pages/registration/PlotRegistration';
import Profile from '../pages/userdetails/Profile';
import EditProfile from '../pages/userdetails/EditProfile';
import Login from '../pages/userdetails/Login';
import Layout from '../pages/Layout';

export default function Routers() {
  return (
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="plotregistration" element={<PlotRegistration />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}
