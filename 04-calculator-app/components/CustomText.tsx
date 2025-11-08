import { Text, type TextProps } from "react-native";

import { globalStyle } from "@/styles/global-style";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

const CustomText = ({ children, variant, ...textProps }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyle.mainResult,
        variant === "h2" && globalStyle.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default CustomText;
