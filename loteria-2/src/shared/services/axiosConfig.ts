import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'application/json'
      // `Bearer ${window.localStorage.getItem('token')}`
    },
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  return Promise.reject(error.response);
});

export default instance;