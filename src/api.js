import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(config => {
    if (localStorage.access_token) {
        config.headers.authorization = `Bearer ${localStorage.access_token}`;
    }
    return config;
}, error => Promise.reject(error));

api.interceptors.response.use(config => {
    return config;
}, error => {
    // if (error.response && (error.response.data.message === 'Token has expired' || error.response.data.message === 'Unauthenticated')) {
    //     return axios.post('/api/auth/refresh', {}, {
    //         headers: {
    //             'authorization': `Bearer ${localStorage.access_token}`,
    //         },
    //     }).then(res => {
    //         localStorage.access_token = res.data.access_token;
    //         error.config.headers.authorization = `Bearer ${res.data.access_token}`;
    //         return api.request(error.config);
    //     }).catch(() => {
    //         router.push({name: 'Авторизация'});
    //     });
    // }
    return Promise.reject(error);
});

export default api;
