import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.EXPO_PUBLIC_MOVIE_DB_KEY
    },
});