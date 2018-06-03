import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'SOME TOKEN';

axios.interceptors.request.use(
    request => {
        console.log('interceptors request', request);
        //We can edit request object
        return request;
    },
    error => {
        console.log('interceptors request error', error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        console.log('interceptors response', response);
        //We can edit response object
        return response;
    },
    error => {
        console.log('interceptors response error', error);
        return Promise.reject(error);
    }
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
