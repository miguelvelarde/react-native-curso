import { Details } from '@/infrastructure/interfaces/details';
import { MovieDbDetailsResponse } from '@/infrastructure/interfaces/movieDbDetailsResponse';
import { MovieMapper } from '@/infrastructure/mappers/movieMapper';
import { moviesApi } from '../api/moviesApi';

// getMovieDetailsAction es una función asíncrona que recibe un ID de película 
// y devuelve una promesa con los detalles de la película
// el action manda llamar a la API de películas para obtener los detalles de la película 
// y luego mapea la respuesta a un objeto MovieDetails utilizando el MovieMapper
// si lo comparamos con una aplicacion de .net este seria como el controller que recibe
//  la peticion del cliente, llama al servicio para obtener los datos y luego devuelve
//  la respuesta al cliente y moviesApi seria como el servicio que se encarga de hacer 
//  la llamada a la API externa para obtener los datos de la película
export const getMovieDetailsAction = async (id: number | string): Promise<Details> => {
    try {
        const { data } = await moviesApi.get<MovieDbDetailsResponse>(`/${id}`);

        console.log("pelicula cargada");

        return MovieMapper.fromTheMovieDBToMovieDetails(data);
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching movie details');
    }
}
