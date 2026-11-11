import { Text, View, Image } from 'react-native';
export default function DrawerProfile() { 
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={{uri: 'https://i.pravatar.cc/150'}} style={{width:100, height:100, borderRadius:50, marginBottom: 10}} />
      <Text style={{fontSize: 18}}>Thông tin User</Text>
    </View>
  ); 
}