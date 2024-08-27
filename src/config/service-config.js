import LandDeapartment from "../pages/services/components/raise-service-request/LandDeapartment";
import FireDepartment from "../pages/services/components/raise-service-request/FireDepartment";
import WaterDepartment from "../pages/services/components/raise-service-request/WaterDepartment";

export const serviceConfig = {
    'Services': [
      { serviceName: 'Land Department', component: LandDeapartment },
      { serviceName: 'Fire Department', component: FireDepartment},
      { serviceName: 'Water Department', component: WaterDepartment}
    ]
  };

  