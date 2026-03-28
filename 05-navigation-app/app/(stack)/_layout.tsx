import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
   <Stack
   screenOptions={{
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: '#fff' },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    <Stack.Screen 
        name="home/index" 
        options={{
            headerShown: true, 
            headerTitle: 'Inicio'
        }}
    />
    
    <Stack.Screen 
        name="products/index" 
        options={{
            headerShown: true, 
            headerTitle: 'Productos'
        }}
    />
    <Stack.Screen 
        name="profile/index" 
        options={{
            headerShown: true, 
            headerTitle: 'Perfil'
        }}
    />
    <Stack.Screen 
        name="settings/index" 
        options={{
            headerShown: true, 
            headerTitle: 'Configuración'
        }}
    />
    <Stack.Screen 
        name="products/[id]" 
        options={{
            headerShown: true, 
            headerTitle: 'Detalles del Producto'
        }}
    />
   </Stack>
  )
}

export default StackLayout