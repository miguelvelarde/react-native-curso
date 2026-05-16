import { Details } from '@/infrastructure/interfaces/details';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
    movie: Details;
}

const DetailsDescription = ({ movie }: Props) => {

    console.log(JSON.stringify(movie, null, 2));

    return (
        <>
            <View className="mx-5">
                <View className='flex flex-row'>
                    <Text className='font-semibold text-lg'>Raiting: </Text>
                    <Text>{Number(movie.rating).toFixed(1)}</Text>
                </View>

                <View className='flex flex-row'>
                    <Text className='font-semibold text-lg'>Genero: </Text>
                    <Text>{movie.genres.join(', ')}</Text>
                </View>

                <Text className='font-semibold text-lg mt-5'>Sinopsis</Text>
                <Text className='font-normal'>{movie.description}</Text>

                <Text className='font-semibold text-lg mt-5'>Presupuesto</Text>
                <Text className='font-semibold text-2xl mb-5'>{movie.budget} USD
                    {/* {Formatter.formatCurrency(Number(movie.budget))} */}
                </Text>
            </View>
        </>
    )
}

export default DetailsDescription