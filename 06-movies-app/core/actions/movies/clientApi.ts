import { MovieDBPopularInterface } from "@/infrastructure/interfaces/moviedb-popular-interface";
import { axiosApi } from "../api/axiosApi";

export const clientApi = async () => {
    try {
        const { data } = await axiosApi.get<MovieDBPopularInterface>('/movie/popular');
        console.log(JSON.stringify(data, null, 2));
        return data.results;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error fetching popular movies');
    }
}
