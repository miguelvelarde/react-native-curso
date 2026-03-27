import CustomBoton from "@/components/shared/CustomBoton";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View className="px-10 mt-5">

    <CustomBoton color="primary" onPress={() => router.push('/products')}>Productos</CustomBoton>
    <CustomBoton color="secondary" onPress={() => router.push('/profile')}>Profile</CustomBoton>
    <CustomBoton color="tertiary" onPress={() => router.push('/settings')}>Ajustes</CustomBoton>

      {/* <Text className="mb-5 font-work-black">HomeScreen</Text>

      <Link className="mb-5" href="/products">
        Productos
      </Link>
      <Link className="mb-5" href="/profile">
        Profile
      </Link>
      <Link className="mb-5" href="/settings">
        Ajustes
      </Link> */}
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
