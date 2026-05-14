import { getMovieDetailsAction } from '@/core/actions/getMovieDetailsAction';
import { useQuery } from '@tanstack/react-query';

export const useMovieDetails = (id: number | string) => {

    const movieQuery = useQuery({
        queryKey: ['movieDetails', id],
        queryFn: () => getMovieDetailsAction(id),
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
    });

    return (
        {
            movieQuery
        }

    )
}
