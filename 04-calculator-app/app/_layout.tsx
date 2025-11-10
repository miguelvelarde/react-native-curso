import { Platform, View } from "react-native";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyle } from "@/styles/global-style";

import * as NavigationBar from "expo-navigation-bar";

//this only works with android
if (Platform.OS === "android") {
  NavigationBar.setBackgroundColorAsync("black");
}

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
