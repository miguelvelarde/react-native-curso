import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerActiveTintColor: '#f4511e',
        sceneStyle: {
          backgroundColor: 'white',
        },

      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          // color and size are passed by the drawer navigator, so we can use them to style our icon
          // we don't pass the values for color and size, but they are available in the drawerIcon function, so we can use them to style our icon
          drawerIcon: ({ color, size }) => <Ionicons name="layers-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          // color and size are passed by the drawer navigator, so we can use them to style our icon
          // we don't pass the values for color and size, but they are available in the drawerIcon function, so we can use them to style our icon
          drawerIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'Horarios',
          drawerIcon: ({ color, size }) => <Ionicons name="calendar-outline" size={size} color={color} />
        }}
      />
    </Drawer>)
}

export default DrawerLayout