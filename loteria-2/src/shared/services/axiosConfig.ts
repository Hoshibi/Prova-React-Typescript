import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {

  if(error.response?.status === 500) {
    throw new Error('Erro no servidor')
  }

  return Promise.reject(error.response);
});

export default instance;