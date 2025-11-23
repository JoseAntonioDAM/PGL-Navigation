// app/(tabs)/portfolio/index.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function PortfolioHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Portfolio</Text>
      <Text style={styles.subtitle}>
        Bienvenido a mi aplicación de portfolio
      </Text>
      <Text style={styles.instruction}>
        Usa las pestañas inferiores para navegar entre mis hobbies y el código QR de mi repositorio amiguito
      </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});