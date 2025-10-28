import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  label: string;

  position?: "left" | "right";

  //actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.5 } : { opacity: 1.0 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 70,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },

  positionRight: {
    right: 50,
  },

  positionLeft: {
    left: 50,
  },
});
