import { nowPlayingAction } from "@/core/actions/nowPlayingAction";
import { popularMoviesAction } from "@/core/actions/popularMoviesAction";
import { ratedMoviesAction } from "@/core/actions/ratedMoviesAction";
import { uncomingMoviesAction } from "@/core/actions/uncomingMoviesAction";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const nowPlayingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'now-playing'],
        queryFn: ({ pageParam = 1 }) => {
            return nowPlayingAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1, // Devuelve el número de la siguiente página a cargar
    });

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'popular'],
        queryFn: ({ pageParam = 1 }) => {
            //console.log('popularMoviesAction Cargando página', pageParam);
            return popularMoviesAction({ page: pageParam });
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1, // Devuelve el número de la siguiente página a cargar
    });

    const ratedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'rated'],
        queryFn: ({ pageParam = 1 }) => {
            //console.log('ratedMoviesAction Cargando página', pageParam);
            return ratedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1, // Devuelve el número de la siguiente página a cargar
    });

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'],
        queryFn: ({ pageParam = 1 }) => {
            //console.log('uncomingMoviesAction Cargando página', pageParam);
            return uncomingMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1, // Devuelve el número de la siguiente página a cargar
    });

    return {
        nowPlayingQuery,
        popularQuery,
        ratedQuery,
        upcomingQuery,
    };
}
