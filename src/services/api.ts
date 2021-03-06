import axios from 'axios';

const api = axios.create({
    baseURL: "https://apispacex04.herokuapp.com"
})

export default api;