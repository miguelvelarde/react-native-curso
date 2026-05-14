import { Details } from "../interfaces/details";
import { Movie } from "../interfaces/movie";
import { MovieDbDetailsResponse } from "../interfaces/movieDbDetailsResponse";
import { Result } from "../interfaces/movieDbResponse";

export class MovieMapper {
    static fromTheMovieDBToDomain = (movieDBMovie: Result): Movie => {
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

    static fromTheMovieDBToMovieDetails = (movie: MovieDbDetailsResponse): Details => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `${process.env.EXPO_PUBLIC_MOVIE_DB_IMAGE_URL}${movie.poster_path}`,
            backdrop: `${process.env.EXPO_PUBLIC_MOVIE_DB_IMAGE_URL}${movie.backdrop_path}`,
            rating: movie.vote_average.toString(),
            budget: `$${movie.budget.toLocaleString()}`,
            duration: `${movie.runtime} minutes`,
            genres: movie.genres.map(genre => genre.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name)
        };
    }
}