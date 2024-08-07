import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import PlotRegistration from "../pages/registration/PlotRegistration";
import Profile from "../pages/userdetails/Profile";
import EditProfile from "../pages/userdetails/EditProfile";
import Login from "../pages/userdetails/Login";
import PageNotFound from "../pages/error-pages/PageNotFound";
import ServerError from "../pages/error-pages/ServerError";
import UnderMaintenance from "../pages/error-pages/UnderMaintenance";
import NetworkConeection from "../pages/error-pages/NetworkConeection";
import Layout from "../pages/master-layout/Layout";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plotregistration" element={<PlotRegistration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/servererror" element={<ServerError />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="/undermaintenance" element={<UnderMaintenance />} />
          <Route path="/networkconeection" element={<NetworkConeection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
