import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('window');

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Elevator')}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

// Elevator component
const Elevator = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/elevator.jpg')} style={styles.background}>
      <TouchableOpacity
        style={styles.button_3r}
        onPress={() => {
          console.log('Navigating to Floor 3R');
          navigation.navigate('ThreeOne');
        }}
      ></TouchableOpacity>
      <TouchableOpacity style={styles.button_4}></TouchableOpacity>
      <TouchableOpacity style={styles.button_5}></TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeOne component
const ThreeOne = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/three_one.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to Elevator');
          navigation.navigate('Elevator');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }],
              top: height * 0.35,
              left: width * -0.04,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeTwo');
          navigation.navigate('ThreeTwo');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '180deg' }],
              top: height * -0.04,
              left: width * 0.35,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeTwo component
const ThreeTwo = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/three_two.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeOne');
          navigation.navigate('ThreeOne');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }, { rotateY: '60deg' }],
              top: height * 0.35,
              left: width * -0.15,
              width: width * 0.2,
              height: height * 0.1,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeThreeFront');
          navigation.navigate('ThreeThreeFront');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '90deg' }, { rotateY: '60deg' }],
              top: height * -0.04,
              left: width * -0.11,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeThreeFront component
const ThreeThreeFront = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/Three_Three_Front.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeThreeBack');
          navigation.navigate('ThreeThreeBack');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }, { rotateY: '60deg' }],
              top: height * 0.35,
              left: width * -0.1,
              width: width * 0.2,
              height: height * 0.1,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeONine');
          navigation.navigate('ThreeONine');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '0deg' }, { rotateX: '60deg' }],
              top: height * 0.15,
              left: width * -0.4,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeTwo');
          navigation.navigate('ThreeTwo');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '0deg' }, { rotateX: '40deg' }],
              top: height * 0.35,
              left: width * -0.4,
              width: width * 0.2,
              height: height * 0.1,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeThreeBack component
const ThreeThreeBack = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/Three_Three_Back.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeThreeFront');
          navigation.navigate('ThreeThreeFront');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }],
              top: height * 0.35,
              left: width * -0.04,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeBathroom');
          navigation.navigate('ThreeBathroom');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '180deg' }, { rotateX: '60deg' }],
              top: height * 0.05,
              left: width * 0.15,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeBathroom component
const ThreeBathroom = ({ navigation }) => {
  const [sound, setSound] = useState(null);

  const playSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      require('./assets/bathroom_goblin.mp3') // Replace with your sound file path
    );
    setSound(newSound);
    await newSound.playAsync();
  };

  // Clean up sound when the component unmounts
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <ImageBackground source={require('./assets/Three_Bathroom.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeThreeBack');
          navigation.navigate('ThreeThreeBack');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }],
              top: height * 0.35,
              left: width * -0.04,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound}>
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            {
              transform: [{ rotate: '0deg' }],
              top: height * 0.4,
              left: width * -0.35,
              width: width * 0.5,
              height: height * 0.2,
              borderRadius: 30,
              opacity: 0,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

// ThreeONine component
const ThreeONine = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/Three_O_Nine.jpg')} style={styles.background}>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeThreeFront');
          navigation.navigate('ThreeThreeFront');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '270deg' }],
              top: height * 0.35,
              left: width * -0.04,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Navigating to ThreeBathroom');
          navigation.navigate('ThreeBathroom');
        }}
      >
        <Image
          source={require('./assets/green_navigation_arrow.png')}
          style={[
            styles.arrow,
            {
              transform: [{ rotate: '180deg' }],
              top: height * 0.05,
              left: width * 0.35,
            },
          ]}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Elevator" component={Elevator} />
        <Stack.Screen name="ThreeOne" component={ThreeOne} />
        <Stack.Screen name="ThreeTwo" component={ThreeTwo} />
        <Stack.Screen name="ThreeThreeFront" component={ThreeThreeFront} />
        <Stack.Screen name="ThreeThreeBack" component={ThreeThreeBack} />
        <Stack.Screen name="ThreeBathroom" component={ThreeBathroom} />
        <Stack.Screen name="ThreeONine" component={ThreeONine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  arrow: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  button_3r: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.15,
  },
  button_4: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    position: 'absolute',
    top: height * 0.4,
    left: width * 0.15,
  },
  button_5: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    position: 'absolute',
    top: height * 0.55,
    left: width * 0.15,
  },
});