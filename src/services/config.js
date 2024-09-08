import axios from "axios";
const URL = "https://api.coingecko.com/api/v3/";
const API_KEY = "CG-DEmNmFoTKJNQ9wEbojREZB11";

const api = axios.create({
      withCredentials: false,
      baseURL: URL
});
api.interceptors.request.use(
      (request) => {
            return request;
      },
      (error) => {
            return Promise.reject(error)
      });
api.interceptors.response.use(
      (response) => {

            return response;
      },
      (error) => {
            return Promise.reject(error)
      })

export { api, API_KEY };