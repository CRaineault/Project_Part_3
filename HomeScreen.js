import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#8B0000', '#1A1A1A']} style={styles.background}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Escape IC!</Text>

        {/* Start Game Button */}
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={() => navigation.navigate('Elevator')}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>

        {/* Instructions Button */}
        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate('InstructionsScreen')}>
          <Text style={styles.buttonText}>Instructions</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF0000',
    textShadowColor: '#1A1A1A',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 50,
  },
  startButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#1A1A1A',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  secondaryButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 18,
    fontWeight: '600',
  },
});
