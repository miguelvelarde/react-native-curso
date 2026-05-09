import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useRef } from 'react'

import { MovieInterface } from '@/infrastructure/interfaces/movie-interface';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: MovieInterface[];
    className?: string;
    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        // contentsize = contenido de lo que tenemos
        // layoutMeasurement = lo que se ve en pantalla
        // contentOffset = cuanto hemos scrolleado
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width * 600) >= contentSize.width - 20;

        if (isEndReached) {
            if (loadNextPage) {
                loadNextPage();
            }

            isLoading.current = true;

            setTimeout(() => {
                isLoading.current = false;
            }, 1000);
        }

        console.log('Cargar más películas');
        loadNextPage && loadNextPage();
    }

    return (
        <View className={` ${className}`}>
            {title &&
                <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
            }

            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} smallPoster />
                )}
                onScroll={onScroll}
            />
        </View>
    );
};
export default MovieHorizontalList;