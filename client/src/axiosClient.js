import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: 'https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1'
});