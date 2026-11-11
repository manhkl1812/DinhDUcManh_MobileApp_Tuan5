import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

type Phone = { id: string; name: string; price: string; };

export default function ProductsScreen() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch('https://6abb550db2118ed7abb84013.mockapi.io/phone')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then((data) => {
      setPhones(data);
    })
    .catch((err) => {
      console.error("Lỗi fetch API:", err);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm</Text>
      <FlatList
        data={phones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push({ pathname: '/phone/[id]', params: { id: item.id } })}
          >
            <Image source={require('@/assets/images/blue.png')} style={styles.image} resizeMode="contain" />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: { flexDirection: 'row', padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 12, alignItems: 'center' },
  image: { width: 80, height: 100 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'red', marginTop: 8 },
});