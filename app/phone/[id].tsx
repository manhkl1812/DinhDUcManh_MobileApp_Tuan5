import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = [
  { id: 'blue', hex: '#1a5276', image: require('@/assets/images/blue.png') },
  { id: 'red', hex: '#e74c3c', image: require('@/assets/images/red.png') },
  { id: 'black', hex: '#111', image: require('@/assets/images/black.png') },
  { id: 'white', hex: '#f5f5f5', image: require('@/assets/images/white.png') },
];

export default function PhoneDetail() {
  const { id } = useLocalSearchParams();
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={selectedColor.image} style={styles.mainImage} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.name}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        
        <View style={styles.ratingRow}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.reviews}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.990.000 đ</Text>
        </View>

        <Text style={styles.promo}>Ở ĐÂU RẺ HƠN HOÀN TIỀN <Ionicons name="help-circle-outline" size={16} /></Text>

        <Pressable style={styles.colorBtn} onPress={() => setModalVisible(true)}>
          <Text style={styles.colorBtnText}>4 MÀU-CHỌN MÀU</Text>
          <Ionicons name="chevron-forward" size={20} />
        </Pressable>

        <Pressable style={styles.buyBtn}>
          <Text style={styles.buyBtnText}>CHỌN MUA</Text>
        </Pressable>
      </View>

      {/* Modal Chọn Màu */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
             <Image source={selectedColor.image} style={{width: 60, height: 80}} resizeMode="contain" />
             <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Điện Thoại Vsmart Joy 3</Text>
                <Text>Hàng chính hãng</Text>
                {selectedColor.id !== COLORS[0].id && (
                    <Text>Màu: <Text style={{fontWeight: 'bold'}}>{selectedColor.id}</Text></Text>
                )}
             </View>
          </View>
          <View style={styles.modalBody}>
             <Text style={{marginBottom: 15, fontSize: 16}}>Chọn một màu bên dưới:</Text>
             {COLORS.map((color) => (
                <Pressable 
                  key={color.id} 
                  style={[styles.colorOption, { backgroundColor: color.hex }]}
                  onPress={() => setSelectedColor(color)}
                />
             ))}
          </View>
          <Pressable style={styles.doneBtn} onPress={() => setModalVisible(false)}>
             <Text style={styles.doneBtnText}>XONG</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mainImage: { width: '100%', height: 300, marginTop: 20 },
  content: { padding: 16 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  stars: { color: 'gold', fontSize: 16 },
  reviews: { marginLeft: 10, color: '#333' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  price: { fontSize: 20, fontWeight: 'bold', marginRight: 15 },
  oldPrice: { fontSize: 16, color: '#888', textDecorationLine: 'line-through' },
  promo: { color: 'red', fontSize: 12, marginBottom: 20 },
  colorBtn: { flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
  colorBtnText: { fontWeight: 'bold' },
  buyBtn: { backgroundColor: '#E53935', padding: 15, borderRadius: 10, alignItems: 'center' },
  buyBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalHeader: { backgroundColor: '#fff', flexDirection: 'row', padding: 15 },
  modalBody: { backgroundColor: '#b0b0b0', padding: 20, flex: 1 },
  colorOption: { width: 60, height: 60, marginBottom: 15, alignSelf: 'center', elevation: 3 },
  doneBtn: { backgroundColor: '#2c5ea9', padding: 15, margin: 20, borderRadius: 5, alignItems: 'center' },
  doneBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});