import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL));


const GET_DISTRICT = "/GetDistrictPresentUnit";
const GET_INDUSTRIAL_AREA = "/GetIndustrialAreasByDistrict";
const GET_PROPERTY_FORM = "/GetIndustrialPropertyFormType";
const GET_TYPE_OF_PROPERTY = "/GetIndustrialPropertyType";
const GET_PROPERTY_NUMBER = "/GetPropertyNumber";

export default {
    getDistrict: async () => {
        const response = await apiService.get(GET_DISTRICT);
        console.log(response);
        return response;
    },
    getIndustrialArea: async (districtId)=>{
        const response = await apiService.get(`${GET_INDUSTRIAL_AREA}?districtId=${districtId}`);
        console.log(response);
        return response;
    },
    getPropertForms: async (industrialAreaId)=>{
        const response = await apiService.get(`${GET_PROPERTY_FORM}?IndustrialAreaID=${industrialAreaId}`);
        console.log(response);
        return response;
    },
    getPropertyType : async (industrialAreaId) =>{
        const response = await apiService.get(`${GET_TYPE_OF_PROPERTY}?IndustrialAreaID=${industrialAreaId}`);
        console.log(response);
        return response;
    },
    getPropertyNumber : async (IndustrailID,TypeOfPlot,PropertyFormType) =>{
        const response = await apiService.get(`${GET_PROPERTY_NUMBER}?IndustrailID=${IndustrailID}&TypeOfPlot=${TypeOfPlot}&PropertyFormType=${PropertyFormType}`);
        console.log(response);
        return response;
    }
  };