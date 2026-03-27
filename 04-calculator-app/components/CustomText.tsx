import { Text, type TextProps } from "react-native";

import { globalStyle } from "@/styles/global-style";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

// el children es el texto que se va a mostrar, 
// el variant es para saber si es el resultado principal o el secundario, 
// y el resto de las props se pasan al componente Text de react native
// no es necesario pasar el color y la fuente porque ya se definen en el estilo global, 
// pero se pueden sobreescribir si se pasan como props
// children tampoco es necesario pasarlo como prop porque 
// se puede usar como un componente de react, lo estamos importando desde TextProps, 
// pero lo dejamos para que sea más claro
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
