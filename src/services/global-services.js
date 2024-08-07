import axios from 'axios';
 const GlobalServiceFile = (instance) => {
    const defaultHeaders = () => {
        return {
            // 'Authorization': "Bearer " + localStorage.getItem('authtoken').replace(/"/g, ''),
            'Content-Type': 'application/json',
        };
    };
    const request = async (method, url, data = null, customHeaders = {}) => {
        const headers = { ...defaultHeaders(), ...customHeaders };
        
 
        const config = {
            method,
            url,
            headers
        };
 
        if (data) {
            config.data = data;
        }
 
        try {
            const response = await instance(config);
            //console.log("response", response)
            return response;
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            } else {
                // Handle other errors
                console.error("Error:", error);
            }
            throw error;
        }
    };
 
    const get = (url, data,customHeaders = {}) => {
        return request('get', url, data, customHeaders);
    };
 
    const post = (url, data, customHeaders = {}) => {
        return request('post', url, data, customHeaders);
    };
 
    const put = (url, data, customHeaders = {}) => {
        return request('put', url, data, customHeaders);
    };
 
    const _delete = (url, customHeaders = {}) => {
        return request('delete', url, null, customHeaders);
    };
 
    return { get, post, put, delete: _delete };
};
 
export default GlobalServiceFile;
