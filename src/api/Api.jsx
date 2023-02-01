import axios from 'axios';
import {API_URL} from "@env"


export const apiDB=axios.create({
    baseURL:API_URL
});


export default apiDB;
