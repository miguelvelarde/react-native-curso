import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string;
    color?: 
        'primary' | 
        'secondary' |
        'secondary-100' |
        'secondary-200' | 
        'tertiary';
}

const CustomBoton = ({ 
    children, 
    color = 'primary',
    onPress,
    onLongPress
}: Props) => {
    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        'secondary-100': 'bg-secondary-100',
        'secondary-200': 'bg-secondary-200',
        tertiary: 'bg-tertiary'
    }[color]

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-80`}
      onPress={onPress}
      onLongPress={onLongPress}
    >

        <Text className="text-white text-center">
            {children}
        </Text>

    </Pressable>
  )
}

export default CustomBoton