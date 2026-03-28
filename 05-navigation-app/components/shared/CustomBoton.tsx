import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string;
    variant?: 'contained' | 'text-only';
    className?: string;
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
    variant = 'contained',
    className,
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

    const txtColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        'secondary-100': 'text-secondary-100',
        'secondary-200': 'text-secondary-200',
        tertiary: 'text-tertiary'
    }[color]

    if(variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className} active:opacity-80`}
                onPress={onPress}
                onLongPress={onLongPress}
            >

            <Text className={`text-center ${txtColor} font-work-medium`}>
                {children}
            </Text>
    </Pressable>);
    }

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} ${className} active:opacity-80`}
      onPress={onPress}
      onLongPress={onLongPress}
    >

        <Text className={`text-white text-center font-work-medium ${className}`}>
            {children}
        </Text>

    </Pressable>
  )
}

export default CustomBoton