// components/PortfolioHeader.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PortfolioHeader() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.avatar}
        source={require("../assets/fonfo+.PNG")}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Descripción sobre mí!</Text>
        <Text style={styles.description}>
            ¡Hola! Soy José Antonio, un apasionado de la programación y el desarrollo
            de aplicaciones móviles. Me encanta crear soluciones innovadoras y HACER RUNNING 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 35,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  description: {
    textAlign: "center",
    marginTop: 5,
  },
});