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
    // la propiedad pressed es una propiedad que se pasa automáticamente al usar la función style en el Pressable,
    // y nos indica si el botón está siendo presionado o no, lo usamos para cambiar la opacidad del botón cuando se presiona
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
