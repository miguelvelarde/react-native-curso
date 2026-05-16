import { Casting } from '@/infrastructure/interfaces/casting';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
    movies: Casting[];
}

const CastingHorizontalList = ({
    movies
}: Props) => {

    return (
        <View className="mt-5 mb-20">
            <Text className="text-2xl font-bold px-5 mb-5">Casting</Text>
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                renderItem={({ item }) => (
                    <ActorCard actor={item} />
                )}
            />
        </View>
    );
};

export default CastingHorizontalList;