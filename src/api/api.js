import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cc1c8a18e850017decc38.mockapi.io/'
})

export default api;