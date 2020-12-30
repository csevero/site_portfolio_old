import axios from "axios";

const api = axios.create({
  //baseURL: 'https://backend-site-biografia.herokuapp.com'
  baseURL: "http://carlossevero.ddns.net:3333",
});

export default api;
