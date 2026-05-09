import { Result } from "../interfaces/moviedb-interface";
import { MovieInterface } from "../interfaces/movie-interface";

export class MovieMapper {
    static fromTheMovieDBToDomain(movieDBMovie: Result): MovieInterface {
        return {
            id: movieDBMovie.id,
            title: movieDBMovie.title,
            description: movieDBMovie.overview,
            releaseDate: new Date(movieDBMovie.release_date),
            rating: movieDBMovie.vote_average.toString(),
            poster: `${process.env.EXPO_PUBLIC_MOVIE_DB_IMAGE_URL}${movieDBMovie.poster_path}`,
            backdrop: `${process.env.EXPO_PUBLIC_MOVIE_DB_IMAGE_URL}${movieDBMovie.backdrop_path}`
        };
    }
}