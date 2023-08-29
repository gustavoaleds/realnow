import axios from "axios";

const apiUrl = 'https://apicotacao.onrender.com/';
const api = axios.create({
  baseURL: apiUrl,
});

export default api;
