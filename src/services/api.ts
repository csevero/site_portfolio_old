import axios from 'axios';

const api = axios.create({
   baseURL: 'https://backend-site-biografia.herokuapp.com'
})

export default api;