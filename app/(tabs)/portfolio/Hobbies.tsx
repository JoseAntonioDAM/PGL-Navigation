// app/(tabs)/portfolio/hobbies.tsx
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const hobbies = [
  "Salir a pasear",
  "Senderismo", 
  "Ir a la playita",
  "Domingos de misa",
  "Pelis de miedo",
  "El monte con lluvia",
  "Viajar",
  "Running",
  "Videojuegos",
  "EL barça"
];

export default function HobbiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Hobbies</Text>
      <ScrollView style={styles.scrollView}>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.hobbyItem}>
            {hobby}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  scrollView: {
    padding: 10,
  },
  hobbyItem: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 15,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "#e0e0e0",
    marginBottom: 8,
  },
});