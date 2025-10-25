import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{counter}</Text>

      <Pressable
        style={styles.floatingButton}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      >
        <Text style={{ color: "white", fontSize: 20 }}>+1</Text>
      </Pressable>

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

  floatingButton: {
    position: "absolute",
    bottom: 70,
    right: 50,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
});
