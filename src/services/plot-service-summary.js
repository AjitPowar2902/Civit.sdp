import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_PLOTSERVICE_URL));


const APPLIED_SERVICE = "/GetPlotAppliedService";
 
const GET_SUBLETTEE = "/GetSubLettee";
 

export default {
    appliedService: async (plotId) => {
        const response = await apiService.get(`${APPLIED_SERVICE}?plotid=${plotId}`);
       
        console.log(response);
        const result = response.data;
     
        return result;
    },
    getSubLettee: async (plotId) => {
        const response = await apiService.get(`${GET_SUBLETTEE}?plotid=${plotId}`);
       let result;
         
         
       if(response.data.IsSuccess == true)
        {
        console.log(response.data);
            result = response.data;
           
        }else{
            console.log(response.data);
            result=null;
        }
       // const result = response.data;
     
        return result;
    }
  };