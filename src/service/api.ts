import axios from "axios";
const apiUrl = "https://compraslocal.onrender.com";



export const api = axios.create({
    baseURL: `${apiUrl}/v1`,
    withCredentials: true
});
