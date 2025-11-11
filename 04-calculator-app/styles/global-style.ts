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

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  operationsView: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },

  button: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGrey,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 5,
  },

  textButton: {
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    color: Colors.textPrimary,
    fontWeight: "300",
  },
});
