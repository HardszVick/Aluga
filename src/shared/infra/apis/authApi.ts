import axios from 'axios';
import { cache } from 'react';

export const aluAuthApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ALU_AUTH_API,
    withCredentials: true
});

export const getAluAuthApiServer = cache(() => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_ALU_AUTH_API,
        adapter: 'fetch'
    });

    api.interceptors.request.use(config => {
        return config;
    });

    return api;
});