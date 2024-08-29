import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL));


const GET_APPLICANT = "/applicant";
const GET_COMPANY_INFO = "/companyInfo";
 
export default {
    getApplicantDetails: async () => {
        const response = await apiService.get(GET_APPLICANT);
       // console.log(response.data);
         const result = response.data;
     
         return result;
    },
    getCompanyInfo: async () => {
      const response = await apiService.get(GET_COMPANY_INFO);
     // console.log(response.data);
       const result = response.data;
   
       return result;
  }
  };