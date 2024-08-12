import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers:{
        'Content-Type':'application/json'
    }
});


api.interceptors.response.use(
    (response)=>
    {
        return response;
    },
    (error)=>
    {
        if (error.response) {
            if (error.response.status === 401) {
              // Redirect to login page or handle unauthorized access
              window.location.href = '/login';
            }
            if (error.response.status === 500) {
              // Handle server error
              alert('Internal Server Error');
            }
          }
          return Promise.reject(error);
    }
)


const apiService = {

    get: async (endpoint,  config = {}) =>{
        try {
           // const fullUrl = `${api.defaults.baseURL}${endpoint}`;
          //  alert(`Making GET request to: ${fullUrl}`); // Alert the full URL
            const response = await api.get(endpoint,config);
            return response.data;
          } catch (error) {
            throw error;
          }
    },
    post: async (endpoint, data, config = {}) => {
      try {
        const fullUrl = `${api.defaults.baseURL}${endpoint}`;
        alert(`Making GET request to: ${fullUrl}`); // Alert the full URL
        const response = await api.post(endpoint, data, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    put: async (endpoint, data, config = {}) => {
      try {
        const fullUrl = `${api.defaults.baseURL}${endpoint}`;
        alert(`Making GET request to: ${fullUrl}`); // Alert the full URL
        const response = await api.put(endpoint, data, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    delete: async (endpoint, config = {}) => {
      try {
        const fullUrl = `${api.defaults.baseURL}${endpoint}`;
        alert(`Making GET request to: ${fullUrl}`); // Alert the full URL
        const response = await api.delete(endpoint, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
}

export default apiService;