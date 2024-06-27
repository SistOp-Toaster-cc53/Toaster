import axios from 'axios';
import {authenticationInterceptor} from "../../iam/services/authentication.interceptor.js";

const http = axios.create({
    baseURL: 'http://localhost:5281/api/v1',
    //baseURL: 'http://localhost:3000/api/v1',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
});

// Add authentication interceptor
http.interceptors.request.use(authenticationInterceptor);

// Export the http object
export default http;