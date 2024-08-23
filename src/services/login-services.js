import CreateAxiosInstance from "./axios-instance";
import GlobalServiceFile from "./global-services";

const apiServices = GlobalServiceFile(CreateAxiosInstance(process.env.REACT_APP_LOGIN_URL));

const VALIDATE_USER = "/users";
const VALIDATE_LOGIN = "/AuthenticateInvestorUser";

export default {
    validateUser: async (data) => {
        let result ;
       // console.log(data);
        const response = await apiServices.get(VALIDATE_USER,data);
        const users = response.data;
       const userExists = users.find(user => user.username === data.username && user.password === data.password);
       
        if(userExists)
        {
            result = userExists;
           
        }else{
            result="401";
        }
       
      return result;
    },
    validateLogin: async(data) =>{

      let result ;
      // console.log(data);
       const response = await apiServices.post(VALIDATE_LOGIN,data);
       //console.log(response);
      // console.log(response.data.Data);
       const users = response.data.Data;
       //console.log(response.data.IsSuccess);
      //const userExists = users.find(user => user.UserName === data.username );
      
       if(response.data.IsSuccess == true)
       {
       // console.log(users);
           result = users;
          
       }else{
           result="401";
       }
      
     return result;

    }
  };
