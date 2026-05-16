import { getMovieCastingAction } from '@/core/actions/getMovieCastingAction';
import { useQuery } from '@tanstack/react-query';

export const useMovieCasting = (id: number | string) => {

    const castingQuery = useQuery({
        queryKey: ['movieCasting', id],
        queryFn: () => getMovieCastingAction(id),
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
    });

    return (
        {
            castingQuery
        }

    )
}
