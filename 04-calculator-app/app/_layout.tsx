import { View } from "react-native";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyle } from "@/styles/global-style";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyle.background}>
      <Slot></Slot>
      <StatusBar style="light"></StatusBar>
    </View>
  );
};

export default RootLayout;
