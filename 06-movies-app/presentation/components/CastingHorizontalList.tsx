import { Casting } from '@/infrastructure/interfaces/casting';
import { useEffect, useRef } from 'react';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    View
} from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
    movies: Casting[];
    className?: string;

    loadNextPage?: () => void;
}

const CastingHorizontalList = ({
    movies,
    className,
    loadNextPage,
}: Props) => {
    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached =
            contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

        if (!isEndReached) return;

        isLoading.current = true;

        //console.log('Cargar siguientes películas');
        loadNextPage && loadNextPage();
    };

    return (
        <View className={` ${className}`}>
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) => (
                    <ActorCard actor={item} />
                )}
                onScroll={onScroll}
            />
        </View>
    );
};
export default CastingHorizontalList;