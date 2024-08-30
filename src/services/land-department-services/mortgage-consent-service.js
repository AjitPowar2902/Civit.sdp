import CreateAxiosInstance from "../axios-instance";
import GlobalServiceFile from "../global-services";

const apiService = GlobalServiceFile(
  CreateAxiosInstance(process.env.REACT_APP_LANDSERVICES_URL)
);

const POST_MORTGAGE_CONSENT_SERVICE = "/SaveMortgageService";

export default {
  postMortgageConsent: async (userId, data) => {
    const customHeaders = {
      userId: userId,
    };
    try {
      const response = await apiService.post(
        POST_MORTGAGE_CONSENT_SERVICE,
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
