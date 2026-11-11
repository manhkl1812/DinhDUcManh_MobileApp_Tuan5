import { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
  const [isDark, setIsDark] = useState(false);
  const [isNoti, setIsNoti] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Thông báo</Text>
        <Switch value={isNoti} onValueChange={setIsNoti} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 10 },
  text: { fontSize: 18 }
});