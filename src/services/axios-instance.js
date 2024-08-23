import axios from "axios";

const CreateAxiosInstance = (baseURL) =>{
    console.log(baseURL);
const instance = axios.create({baseURL: baseURL});
return instance;
};

export default CreateAxiosInstance;