import axios from "axios";

//rodando no navegador

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;