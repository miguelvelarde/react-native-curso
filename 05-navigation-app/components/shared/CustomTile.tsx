import { Pressable, Text, View, PressableProps } from "react-native";

interface Props extends PressableProps {
  title: string;
  subtitle?: string;
  color?: 
    | "primary"
    | "secondary"
    | "secondary-100"
    | "secondary-200"
    | "tertiary";
  className?: string;
}

const CustomTile = ({
  title,
  subtitle,
  color = "primary",
  className,
  ...props
}: Props) => {

  const tileColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    "secondary-100": "bg-secondary-100",
    "secondary-200": "bg-secondary-200",
    tertiary: "bg-tertiary",
  }[color];

  return (
    <Pressable
      className={`w-[48%] h-32 rounded-xl p-4 mb-4 ${tileColor} ${className}`}
      {...props}
    >
      <Text className="text-white text-lg font-work-medium">
        {title}
      </Text>

      {subtitle && (
        <Text className="text-white/80 mt-2 font-work-light">
          {subtitle}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomTile;