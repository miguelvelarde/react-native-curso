import DetailsHeader from '@/presentation/components/movies/DetailsHeader';
import { useMovieDetails } from '@/presentation/hooks/useMovieDetails';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovieDetails(+id);

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
        </ScrollView>
    )
}

export default MovieScreen