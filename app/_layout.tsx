import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen 
        name="index" 
        options={{
          title: 'Inicio',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="(tabs)" 
        options={{
          title: 'Mi Portfolio',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="counter" 
        options={{
          title: 'Contador',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}