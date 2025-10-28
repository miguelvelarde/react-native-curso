import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{counter}</Text>

      <FAB
        label="+1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        position="right"
      ></FAB>

      <FAB label="Reset" onPress={() => setCounter(0)} position="left"></FAB>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  bigText: {
    fontSize: 100,
    fontWeight: "thin",
  },
});
