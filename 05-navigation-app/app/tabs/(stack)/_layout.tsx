//import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
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
                    headerTitle: 'Inicio'
                }}
            />

            <Stack.Screen
                name="products/index"
                options={{
                    headerTitle: 'Productos'
                }}
            />
            <Stack.Screen
                name="profile/index"
                options={{
                    headerTitle: 'Perfil'
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    headerTitle: 'Configuración'
                }}
            />
            <Stack.Screen
                name="products/[id]"
                options={{
                    headerTitle: 'Detalles del Producto'
                }}
            />
        </Stack>
    )
}

export default StackLayout