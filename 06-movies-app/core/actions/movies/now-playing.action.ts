import { MovieDbInterface } from '@/infrastructure/interfaces/moviedb-interface';
import { moviesApi } from '../api/moviesApi';
import { MovieMapper } from '@/infrastructure/mappers/movie-mapper';

// Options es un objeto que puede tener page y limit, ambos opcionales, con valores por defecto
// y se pasa como argumento a la función nowPlayingAction, que es una función asíncrona que devuelve una promesa de un array de películas
interface Options {
    page?: number;
    limit?: number;
}

// nowPlayingAction es una función asíncrona que recibe un objeto de opciones con page y limit, y devuelve una promesa de un array de películas
export const nowPlayingAction = async ({ page = 1, limit = 10 }: Options) => {

    try {

        const { data } = await moviesApi.get<MovieDbInterface>('/now_playing', {
            params: { page, limit }
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToDomain);

        //console.log(JSON.stringify(movies, null, 2));

        return movies;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching now playing movies');
    }
}
