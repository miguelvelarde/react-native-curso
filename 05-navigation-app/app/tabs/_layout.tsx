import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false
        }}>
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