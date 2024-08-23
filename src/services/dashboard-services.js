 import axios from "axios";
import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";
 


const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL))
const apiServices = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL_PLOT))



const GET_CARD_DATA = "/actionsData";
const GET_GRID_DATA = "/GetPlotSummary";
 

export default {
    getCardData: () => {
     
        const response = apiService.get(GET_CARD_DATA);
        
      return response;
    },

    getGridData: async (userId) => {
      const customHeaders = {
          'userId': userId
      };
      let result;
      const response = await apiServices.get(GET_GRID_DATA, null, customHeaders);
      const gridData = response.data.Data
      console.log(response.data.Data);

      if(response.data.IsSuccess == true)
        {
        // console.log(users);
            result = gridData;
           
        }else{
            result="401";
        }
      
      return response;
    }
  };