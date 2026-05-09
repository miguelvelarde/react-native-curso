import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useMovies } from '@/presentation/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';

const HomeScreen = () => {

    const { nowPlayingQuery, popularQuery, ratedQuery, upcomingQuery } = useMovies();
    const safeArea = useSafeAreaInsets();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator size='large' color='purple' />
            </View>
        );
    }

    if (nowPlayingQuery.isError) {
        return (
            <View className='justify-center items-center flex-1'>
                <Text>Error loading movies</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Home Screen</Text>

                {/* popular movies carousel */}
                <MainSlideshow
                    movies={nowPlayingQuery.data?.pages.flat() ?? []}
                    loadNextPage={nowPlayingQuery.fetchNextPage}
                />

                <MoviesHorizontalList
                    className='mb-5'
                    title='Populares'
                    movies={popularQuery.data?.pages.flat() ?? []}
                    loadNextPage={popularQuery.fetchNextPage} />

                <MoviesHorizontalList
                    className='mb-5'
                    title='Mejor Calificadas'
                    movies={ratedQuery.data?.pages.flat() ?? []}
                    loadNextPage={ratedQuery.fetchNextPage} />

                <MoviesHorizontalList
                    className='mb-5'
                    title='Próximamente'
                    movies={upcomingQuery.data?.pages.flat() ?? []}
                    loadNextPage={upcomingQuery.fetchNextPage} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen