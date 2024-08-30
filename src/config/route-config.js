import Login from "../pages/userdetails/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import PlotRegistration from "../pages/registration/PlotRegistration";
import Profile from "../pages/userdetails/Profile";
import EditProfile from "../pages/userdetails/EditProfile";
import ServerError from "../pages/error-pages/ServerError";
import PageNotFound from "../pages/error-pages/PageNotFound";
import UnderMaintenance from "../pages/error-pages/UnderMaintenance";
import NetworkConeection from "../pages/error-pages/NetworkConeection";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import ThemeDashboard from "../pages/dashboard/ThemeDashboard";
import PlotService from "../pages/services/PlotService";
import RaiseServiceRequest from "../pages/services/RaiseServiceRequest";
import FinalLease from "../pages/services/land-department/final-lease/FinalLease";
import FinalLeaseSummary from "../pages/services/land-department/final-lease/FinalLeaseSummary"
import FinalLeaseService from "../pages/services/land-department/final-lease/FinalLeaseService"
import MortgageConsentService from "../pages/services/land-department/mortgage-consent/MortgageConsentService";
//import ApplicantInformation from "../pages/registration/components/ApplicantInforamtion";
export const routeConfig = {
    'Investor': [
      { path: '/', component: Login },
      { path: '/dashboard', component: Dashboard },
      { path: '/plotregistration', component: PlotRegistration },
      { path: '/profile', component: Profile },
      { path: '/editprofile', component: EditProfile },
      { path: '/servererror', component: ServerError },
      { path: '/pagenotfound', component: PageNotFound },
      { path: '/undermaintenance', component: UnderMaintenance },
      { path: '/networkconeection', component: NetworkConeection},
      { path: '/plotservice', component: PlotService},
      { path: '/raiseservicerequest', component: RaiseServiceRequest},
      { path: '/finallease', component:FinalLease},
      { path: '/finalleasesummary', component: FinalLeaseSummary},
      { path: '/finalleaseservice', component: FinalLeaseService},
      {path: '/mortgageconsentservice', component : MortgageConsentService}
    ],
    'Midc-User': [
        { path: '/', component: Login },
      { path: '/dashboard', component: Dashboard },
      { path: '/plotregistration', component: PlotRegistration },
      { path: '/profile', component: Profile },
      { path: '/editprofile', component: EditProfile },
      { path: '/servererror', component: ServerError },
      { path: '/pagenotfound', component: PageNotFound },
      { path: '/undermaintenance', component: UnderMaintenance },
      { path: '/networkconeection', component: NetworkConeection}
    ],
    'Transaction-User': [
        { path: '/', component: Login },
      { path: '/dashboard', component: Dashboard },
      { path: '/plotregistration', component: PlotRegistration },
      { path: '/profile', component: Profile },
      { path: '/editprofile', component: EditProfile },
      { path: '/servererror', component: ServerError },
      { path: '/pagenotfound', component: PageNotFound },
      { path: '/undermaintenance', component: UnderMaintenance },
      { path: '/networkconeection', component: NetworkConeection}
    ],
    'Admin': [
        { path: '/', component: Login },
        { path: '/dashboard', component: AdminDashboard },
        { path: '/plotregistration', component: PlotRegistration },
        { path: '/profile', component: Profile },
        { path: '/editprofile', component: EditProfile },
        { path: '/servererror', component: ServerError },
        { path: '/pagenotfound', component: PageNotFound },
        { path: '/undermaintenance', component: UnderMaintenance },
        { path: '/networkconeection', component: NetworkConeection}
    ],
    'Test': [
      { path: '/', component: Login },
      { path: '/dashboard', component: ThemeDashboard },
      { path: '/plotregistration', component: PlotRegistration },
      { path: '/profile', component: Profile },
      { path: '/editprofile', component: EditProfile },
      { path: '/servererror', component: ServerError },
      { path: '/pagenotfound', component: PageNotFound },
      { path: '/undermaintenance', component: UnderMaintenance },
      { path: '/networkconeection', component: NetworkConeection}
  ],
  };

  