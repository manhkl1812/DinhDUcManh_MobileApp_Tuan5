import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ drawerActiveTintColor: 'blue', headerShown: true }}>
      <Drawer.Screen name="home" options={{ title: 'Home', drawerIcon: ({color}) => <Ionicons name="home" size={20} color={color as string} /> }} />
      <Drawer.Screen name="profile" options={{ title: 'Profile', drawerIcon: ({color}) => <Ionicons name="person" size={20} color={color as string} /> }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings', drawerIcon: ({color}) => <Ionicons name="settings" size={20} color={color as string} /> }} />
    </Drawer>
  );
}