import { Colors } from "@/constants/Colors";
import { globalStyle } from "@/styles/global-style";
import React, { useCallback } from "react";
import { Pressable, Text } from "react-native";

import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPressButton: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGrey,
  blackText = false,
  doubleSize = false,
  onPressButton,
}: Props) => {
  const handlePress = useCallback(() => {
    Haptics.selectionAsync();
    onPressButton();
  }, [onPressButton]);

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyle.button,
        backgroundColor: color,
        opacity: pressed ? 0.5 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={handlePress}
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
