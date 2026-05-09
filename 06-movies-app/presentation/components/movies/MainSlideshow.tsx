//https://www.npmjs.com/package/react-native-reanimated-carousel

import { useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, View, useWindowDimensions } from 'react-native';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { MovieInterface } from '@/infrastructure/interfaces/movie-interface';
import MoviePoster from './MoviePoster';

interface Props {
    movies: MovieInterface[];
    loadNextPage?: () => void;
}

const MainSlideshow = ({ movies, loadNextPage }: Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;
    const isLoading = useRef(false);

    // Función para manejar el evento de scroll del carrusel
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
    }

    return (
        <View className="h-[250px] w-full">
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster id={item.id} poster={item.poster} />
                )}
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
            />
        </View>
    );
};
export default MainSlideshow;