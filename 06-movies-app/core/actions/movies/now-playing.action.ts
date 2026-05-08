import { MovieDbNowPlayingInterface } from '@/infrastructure/interfaces/moviedb-nowplaying-interface';
import { moviesApi } from '../api/moviesApi';
import { MovieMapper } from '@/infrastructure/mappers/movie-mapper';


export const nowPlayingAction = async () => {

    try {

        const { data } = await moviesApi.get<MovieDbNowPlayingInterface>('/now_playing');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToDomain);

        console.log(JSON.stringify(movies, null, 2));

        return movies;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching now playing movies');
    }
}
