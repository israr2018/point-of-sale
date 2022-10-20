import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config()
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
  // timeout: 4000,
});

export default api;