import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store';

const ProductDetail = () => {

    const {id} = useLocalSearchParams();

    const product = products.find(p => p.id === id);

    if(!product) {
        return (
            <View>
              <Text>Product not found</Text>
            </View>
        );
    }

  return (
    <View className="px-5 mt-10">
      <Text className="font-work-black text-2xl">{product?.title}</Text>
      <Text className="font-work-light">{product?.description}</Text>
      <Text className="font-work-black">Stock: {product?.price}</Text>
    </View>
  )
}

export default ProductDetail