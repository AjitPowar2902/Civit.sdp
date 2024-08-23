import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL_PLOT));


const GET_DISTRICT = "/GetDistrictPresentUnit";
const GET_INDUSTRIAL_AREA = "/GetIndustrialAreasByDistrict";
const GET_PROPERTY_FORM = "/GetIndustrialPropertyFormType";
const GET_TYPE_OF_PROPERTY = "/GetIndustrialPropertyType";
const GET_PROPERTY_NUMBER = "/GetPropertyNumber";

export default {
    getDistrict: async () => {
        const response = await apiService.get(GET_DISTRICT);
        const result = response.data;
     
        return result;
    },
     getIndustrialArea: async (districtId)=>{
        const response = await apiService.get(`${GET_INDUSTRIAL_AREA}?districtId=${districtId}`);
        const result = response.data;
       
        return result;
     },
    getPropertForms: async (industrialAreaId)=>{
        const response = await apiService.get(`${GET_PROPERTY_FORM}?IndustrialAreaID=${industrialAreaId}`);
        const result = response.data;
        
        return result;
    },
    getPropertyType : async (industrialAreaId) =>{
        const response = await apiService.get(`${GET_TYPE_OF_PROPERTY}?IndustrialAreaID=${industrialAreaId}`);
        const result = response.data;
       
        return result;
    },
    getPropertyNumber : async (IndustrailID,TypeOfPlot,PropertyFormType) =>{
        const response = await apiService.get(`${GET_PROPERTY_NUMBER}?IndustrailID=${IndustrailID}&TypeOfPlot=${TypeOfPlot}&PropertyFormType=${PropertyFormType}`);
        const result = response.data;
       
        return result;
    }
  };