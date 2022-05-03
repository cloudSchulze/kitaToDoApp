import axios, { AxiosInstance } from "axios";
import env from "./config/env";

let http: AxiosInstance = axios.create({ baseURL: env.API_URL });

class HttpService {
  store: any;
  constructor() {
    http.interceptors.response.use((response) => {
      return response;
    });
  }
}
const httpService = new HttpService();

export { http, httpService };
