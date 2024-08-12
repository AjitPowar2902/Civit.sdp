import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiServices = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_BASE_URL));

const VALIDATE_USER = "/users";

export default {
    validateUser: async (data) => {
        let result = 0;
       // console.log(data);
        const response = await apiServices.get(VALIDATE_USER,data);
        const users = response.data;
       const userExists = users.some(user => user.username === data.username && user.password === data.password);
        if(userExists)
        {
            result = 200;
        }else{
            result=401;
        }
       
      return result;
    }
  };
