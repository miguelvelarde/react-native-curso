import { products } from '@/store/products.store';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductDetail = () => {

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: product?.title || 'Product Detail'
    });
  }, [navigation, product]);

  if (!product) {
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
