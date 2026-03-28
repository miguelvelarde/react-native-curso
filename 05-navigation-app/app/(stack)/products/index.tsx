import { Link } from "expo-router";
import { products } from "@/store/products.store";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList 
        data={products} 
        renderItem={({item}) => (
          <View className="p-4 border-b border-gray-200">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>

            <View className="flex flex-row justify-between">
              <Text className="font-work-black">Stock: {item.price}</Text>
              <Link href=
                {{
                  pathname: "/(stack)/products/[id]",
                  params: { id: item.id }
                }} 
                className="text-primary">Ver detalles</Link>
            </View>
          </View>
        )} 
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
};

export default ProductsScreen;
