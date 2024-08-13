import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../store/user-slice";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Login from "../pages/userdetails/Login";
import UnAuthorized from "../pages/UnAuthorized";
import Dashboard from "../pages/dashboard/Dashboard";
import RoleAccess from "../config/role-access";
import PlotRegistration from "../pages/registration/PlotRegistration";
import Profile from "../pages/userdetails/Profile";
import EditProfile from "../pages/userdetails/EditProfile";
import PageNotFound from "../pages/error-pages/PageNotFound";
import ServerError from "../pages/error-pages/ServerError";
import UnderMaintenance from "../pages/error-pages/UnderMaintenance";
import NetworkConeection from "../pages/error-pages/NetworkConeection";
import { routeConfig } from "../config/route-config";
import Layout from "../pages/master-layout/Layout";
import UnauthorisedAccess from "../pages/error-pages/UnauthorisedAccess";
export default function AuthRouters() {
  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.user);
  console.log(role);
  //const location = useLocation();
  const routes = routeConfig[role] || [];
  const componentsArray = routes.map((route) => ({
    component: route.component,
  }));
  // console.log(componentsArray);
  //const component = routes.component
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />}/>
          <Route index element={<Login />} />
          {routes.map((route, index) => {
            const Component = route.component; // Convert component name to actual component

            return (
              <Route key={index} path={route.path} element={<Component />} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
