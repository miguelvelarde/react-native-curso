import { Casting } from '@/infrastructure/interfaces/casting';
import { MovieDbCreditsResponse } from '@/infrastructure/interfaces/movieDbCreditsResponse';
import { MovieMapper } from '@/infrastructure/mappers/movieMapper';
import { moviesApi } from '../api/moviesApi';

// getMovieCasting es una función asíncrona que recibe un ID de película 
// y devuelve una promesa con el casting de la película
// el action manda llamar a la API de películas para obtener los detalles de la película 
// y luego mapea la respuesta a un objeto Casting utilizando el MovieMapper
export const getMovieCastingAction = async (movieId: number | string): Promise<Casting[]> => {
    try {
        const { data } = await moviesApi.get<MovieDbCreditsResponse>(`/${movieId}/credits`);

        // console.log(JSON.stringify(data, null, 2));

        // esto tambien funciona, es lo mismo que la linea de abajo, pero con una 
        // función flecha anónima
        //return data.cast.map(actor => MovieMapper.fromMovieDBCastToEntity(actor));

        //toma el arreglo cast de la respuesta de la API 
        // (que contiene los actores y su información en el formato original de la base de datos) 
        // y lo transforma usando la función fromMovieDBCastToEntity de MovieMapper.
        return data.cast.map(MovieMapper.fromMovieDBCastToEntity);
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching movie casting');
    }
}
