import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>
      
      <View style={styles.buttons}>
        <Button 
          title="Incrementar" 
          onPress={() => setCount(count + 1)}
        />
        <Button 
          title="Decrementar" 
          onPress={() => setCount(count - 1)}
        />
        <Button 
          title="Resetear" 
          onPress={() => setCount(0)}
        />
      </View>
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
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttons: {
    gap: 10,
  },
});