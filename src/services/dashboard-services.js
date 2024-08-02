 import axios from "axios";
import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";


const apiService = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL))

const GET_CARD_DATA = "/actionsData";

export default {
    getCardData: () => {
        const response = apiService.get(GET_CARD_DATA);
        console.log(response.data);
      return response;
    }
  };