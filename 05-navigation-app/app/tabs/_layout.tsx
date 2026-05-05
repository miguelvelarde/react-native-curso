import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'indigo',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            // tabBarStyle: {
            //     backgroundColor: 'white',
            //     borderTopWidth: 0,
            // },
            // tabBarActiveBackgroundColor: 'rgba(0, 0, 0, 0.1)',

        }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack Screen',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home Screen',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favorites Screen',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}