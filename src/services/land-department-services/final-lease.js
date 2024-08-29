import CreateAxiosInstance from "../axios-instance";
import GlobalServiceFile from "../global-services";

const apiService = GlobalServiceFile(
  CreateAxiosInstance(process.env.REACT_APP_LANDSERVICES_URL)
);

const POST_FINALLEASE_SERVICE = "/SaveFinalLeaseService";

export default {
  postFinalLease: async (userId, data) => {
    const customHeaders = {
      userId: userId,
    };
    try {
      const response = await apiService.post(
        POST_FINALLEASE_SERVICE,
        data,
        customHeaders
      );

      if (response.data.IsSuccess === true) {
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
