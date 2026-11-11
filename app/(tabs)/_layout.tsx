import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#E53935', headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Products', tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color as string} /> }} />
      <Tabs.Screen name="favorites" options={{ title: 'Favorites', tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color as string} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color as string} /> }} />
    </Tabs>
  );
}