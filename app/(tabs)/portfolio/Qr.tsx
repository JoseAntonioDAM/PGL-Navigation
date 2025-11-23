// app/(tabs)/portfolio/qr.tsx
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Repositorio GitHub</Text>
      <View style={styles.qrContainer}>
        <QRCode value="https://github.com/adhernea" size={200} />
      </View>
      <Text style={styles.url}>https://github.com/JoseAntonioDAM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  url: {
    marginTop: 20,
    fontSize: 14,
    color: 'blue',
  },
});