import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burger-shop-e0c20.firebaseio.com/'
});

export default instance;