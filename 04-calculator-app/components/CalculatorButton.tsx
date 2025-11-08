import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/styles/global-style";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGrey,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyle.button,
        backgroundColor: color,
        opacity: pressed ? 0.5 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyle.textButton,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
