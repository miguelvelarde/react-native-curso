import { MovieDbResponse } from "@/infrastructure/interfaces/movieDbResponse";
import { MovieMapper } from '@/infrastructure/mappers/movieMapper';
import { moviesApi } from '../api/moviesApi';

// Options es un objeto que puede tener page y limit, ambos opcionales, con valores por defecto
// y se pasa como argumento a la función ratedMoviesAction, que es una función asíncrona que devuelve una promesa de un array de películas
interface Options {
    page?: number;
    limit?: number;
}

// ratedMoviesAction es una función asíncrona que recibe un objeto de opciones con page y limit, y devuelve una promesa de un array de películas
export const ratedMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await moviesApi.get<MovieDbResponse>('/top_rated', {
            params: { page, limit }
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToDomain);

        //console.log(JSON.stringify(movies, null, 2));

        return movies;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching top rated movies');
    }
}
