import React,{Suspense,lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from '../components/Loding/LoadingBar';
import Layout from '../pages/master-layout/Layout';
 

export default function Routers() {

  const Dashboard=lazy(()=>import('../pages/dashboard/Dashboard'))
  const PlotRegistration=lazy(()=>import('../pages/registration/PlotRegistration'))
  const Profile=lazy(()=>import('../pages/userdetails/Profile'))
  const PageNotFound=lazy(()=>import('../pages/error-pages/PageNotFound'))
  const EditProfile=lazy(()=>import('../pages/userdetails/EditProfile'))
  const Login=lazy(()=>import('../pages/userdetails/Login'))
  const ServerError=lazy(()=>import('../pages/error-pages/ServerError'))
  const UnderMaintenance=lazy(()=>import('../pages/error-pages/UnderMaintenance'))
  const NetworkConeection=lazy(()=>import('../pages/error-pages/NetworkConeection'))
  const UnauthorisedAccess=lazy(()=>import('../pages/error-pages/UnauthorisedAccess'))
//  const ApplicantInformation=lazy(()=>import('../pages/land-department-service/time-limit-oc/ApplicantInformation'))
  return (
   <BrowserRouter>
       <Suspense fallback={<div class="Loding" ><LoadingBar/></div>}>
   <Routes>
   <Route path='/' element={<Layout/>}>
    <Route index element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/plotregistration' element={<PlotRegistration/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/editprofile' element={<EditProfile/>}/>
    <Route path='/servererror' element={<ServerError/>}/>
    <Route path='/pagenotfound' element={<PageNotFound/>}/>
    <Route path='/undermaintenance' element={<UnderMaintenance/>}/>
    <Route path='/networkconeection' element={<NetworkConeection/>}/>
    <Route path='/UnauthorisedAccess' element={<UnauthorisedAccess/>}/>
    {/* <Route path='/applicantinformation' element={<ApplicantInformation/>}/> */}
    </Route>
   </Routes>
   </Suspense>
   </BrowserRouter>
  )
}
