
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      
      <Image 
        source={{ uri: 'https://via.placeholder.com/200' }} 
        style={styles.image}
      />
      
      <Text style={styles.message}>
        Esta es mi aplicación de portfolio personal
      </Text>

      <Link href="/(tabs)/portfolio" asChild>
        <Button title="Ver Mi Portfolio" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
});