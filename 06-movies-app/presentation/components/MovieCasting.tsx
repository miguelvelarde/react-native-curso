import React from 'react';
import { Text, View } from 'react-native';
import { useMovieCasting } from '../hooks/useMovieCasting';

const MovieCasting = ({ movieId }: { movieId: number | string }) => {
    const { castingQuery } = useMovieCasting(movieId);

    if (castingQuery.isLoading) {
        return <Text>Loading...</Text>;
    }

    if (castingQuery.isError) {
        return <Text>Error loading casting</Text>;
    }

    return (
        <View>
            {castingQuery.data?.map((actor) => (
                <Text key={actor.id}>{actor.name}</Text>
            ))}
        </View>
    );
}

export default MovieCasting