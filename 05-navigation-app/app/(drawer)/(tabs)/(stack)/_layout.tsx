//import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftTap = (canGoBack?: boolean) => {
        if (canGoBack) {
            router.back();
            return;
        }

        navigation.getParent()?.dispatch(DrawerActions.toggleDrawer());
    }

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
                headerLeft: ({ tintColor, canGoBack }) =>
                (
                    <Ionicons
                        name={canGoBack ? "arrow-back" : "grid-outline"}
                        className='mr-5 ml-5'
                        color={tintColor}
                        size={20}
                        onPress={() => onHeaderLeftTap(canGoBack)} />
                ),
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
                    headerTitle: 'Configuration'
                }}
            />
            <Stack.Screen
                name="products/[id]"
            />
        </Stack>
    )
}

export default StackLayout
