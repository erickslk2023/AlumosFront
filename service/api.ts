import axios from "axios";

const api = axios.create({
    baseURL:  'http://192.168.0.17:5000'
});

// Adding a response interceptor
api.interceptors.response.use(
    response => response,
    error => {
        // Handle the error
        console.error('API call error:', error);
        return Promise.reject(error);
    }
);

export default api;