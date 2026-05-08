import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/movieDB-response';
import { moviesApi } from '../api/moviesApi';


export const nowPlayingAction = async () => {

    try {
        const { data } = await moviesApi.get<MovieDBMoviesResponse>('/now_playing');
        console.log(JSON.stringify(data, null, 2));
        return data.results;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching now playing movies');
    }
}
