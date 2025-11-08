import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 50,
    textAlign: "right",
    fontWeight: "400",
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 20,
    textAlign: "right",
    fontWeight: "300",
  },
});
