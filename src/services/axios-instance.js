import axios from "axios";

const CreateAxiosInstance = (baseURL) =>{
const instance = axios.create({baseURL: baseURL});
return instance;
};

export default CreateAxiosInstance;