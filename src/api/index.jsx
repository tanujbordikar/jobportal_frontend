import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:2025' });
API.interceptors.request.use((req) => {
   if(localStorage.getItem('userData')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userData')).token}`;
   } 
   return req;
});
const user = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

export const getUserTypes = () => API.get('/usertypes');
export const signin = (email, password) => API.post('/login', email, password);
export const signup = (formData) => API.post('/register', formData);
