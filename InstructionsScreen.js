import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function InstructionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Instructions</Text>

      {/* Instruction Text */}
      <Text style={styles.text}>Welcome to Escape IC!
Your mission is to solve three challenging puzzles to unlock the elevator door and escape in the shortest time possible. The faster you solve them, the higher your score on the leaderboard. Good luck!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingTop: 70, 
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#F2F2F2',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
