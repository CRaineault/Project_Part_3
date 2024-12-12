// GameScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 36,
    color: '#FF0000',
    fontWeight: 'bold',
  },
});
