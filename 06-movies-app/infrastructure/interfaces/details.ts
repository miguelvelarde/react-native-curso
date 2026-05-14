import { Movie } from "./movie";

export interface Details extends Movie {
    genres: string[];
    duration: string;
    budget: string;
    originalTitle: string;
    productionCompanies: string[];
}