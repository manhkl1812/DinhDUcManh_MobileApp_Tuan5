import { Text, View, Image, Button } from 'react-native';
import { router } from 'expo-router';

export default function Profile() { 
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', gap: 20}}>
      <Image source={{uri: 'https://i.pravatar.cc/150'}} style={{width:100, height:100, borderRadius:50}} />
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Lê Thế Anh</Text>
      <Button title="Mở Drawer Menu (Bài 5)" onPress={() => router.push('/(drawer)/home')} color="#E53935" />
    </View>
  ); 
}