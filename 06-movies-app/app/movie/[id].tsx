import CastingHorizontalList from '@/presentation/components/CastingHorizontalList';
import DetailsDescription from '@/presentation/components/DetailsDescription';
import DetailsHeader from '@/presentation/components/DetailsHeader';
import { useMovieCasting } from '@/presentation/hooks/useMovieCasting';
import { useMovieDetails } from '@/presentation/hooks/useMovieDetails';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovieDetails(+id);

    const { castingQuery } = useMovieCasting(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className="flex flex-1 justify-center items-center">
                <Text className='mb-4'>Espere por favor</Text>
                <ActivityIndicator size="large" color="purple"></ActivityIndicator>
            </View>
        );
    }

    return (
        <ScrollView>
            <DetailsHeader
                originalTitle={movieQuery.data.originalTitle}
                title={movieQuery.data.title}
                poster={movieQuery.data.poster}
            />

            <DetailsDescription movie={movieQuery.data} />

            <CastingHorizontalList
                movies={castingQuery.data ?? []}
            />

            <View style={{ height: 40 }} />
        </ScrollView>
    )
}

export default MovieScreen