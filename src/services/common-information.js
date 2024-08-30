import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiService = GlobalServiceFile(
  CreateAxiosInstance(process.env.REACT_APP_COMMON_INFO_URL)
);

const GET_PLOT_INFO = "/GetPlotInformation";

export default {
  getPlotInfo: async (plotId,userId) => {
  
    try {
      const response = await apiService.get(`${GET_PLOT_INFO}?plotId=${plotId}&UserId=${userId}`);

      if (response.data.IsSuccess === true) {
        console.log(response.data);
        return response.data;
      } else {
        console.error("Error response from API:", response.data);
        return "401";
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        return error.response.status;
      } else {
        return error.response.status;
      }
      return error.response.status;
    }
  },
};
