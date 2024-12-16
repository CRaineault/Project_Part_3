import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, Button, TextInput, Alert} from 'react-native';
import Leaderboard from 'react-native-leaderboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GameScreen from './GameScreen';
import InstructionsScreen from './InstructionsScreen';
import HomeScreen from './HomeScreen';  
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import PuzzleJohn from './PuzzleJohn';
import TVPuzzle from './TVPuzzle';
import ComputerGame from './ComputerGame';
import DougBathroom from './DougBathroom';
import { useTimer } from './TimerContext';
import { TimerProvider } from './TimerContext';


const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

let dummyLeaderboardData = [
    {name: "Vitale", score: 4348854},
    {name: "Lukas", score: 4333598},
    {name: "Grace", score: 4323456},
    {name: "Ari", score: 4323455},
    {name: "Alan", score: 4323454},
    {name: "Esther", score: 4323453},
    {name: "Adam", score: 4323452},
    {name: "Amalie", score: 4323451},
    {name: "Jacob", score: 4323450},
    {name: "Cassie", score: 4323503},
]

// async storage functions for the leaderboard screen
const saveLeaderboard = async (leaderboardData) => {
    AsyncStorage.setItem("leaderboard", leaderboardData);
}

const loadLeaderboard = async () => {
    try {
      const data = await AsyncStorage.getItem('leaderboard');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
      return null;
    }
  };

const Elevator = ({navigation}) => {

    const { startTimer} = useTimer();

    // start timer as soon as you're on the elevator screen
    useEffect(() => {
      startTimer()
    })

    return (
            <ImageBackground
                source = {require('./assets/elevator.jpg')}
                style = {styles.background}
                >
                    <TouchableOpacity style={styles.button_3r}
                    onPress={() => {
                    console.log("Navigating to Floor 3R"); // Debugging log
                    navigation.navigate('West_3R_Out');
        }}></TouchableOpacity>
        <TouchableOpacity style={styles.button_4}
                    ></TouchableOpacity>
        <TouchableOpacity style={styles.button_5}
                    ></TouchableOpacity>
            </ImageBackground>
    )
}

const West_3R_Out = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/navigation-images/West_3R_Out.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to Elevator"); // Debugging log
                        navigation.navigate('Elevator');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TL_East"); // Debugging log
                        navigation.navigate('TL_East');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '180deg' }],
                    top: height * -.04,
                    left: width * .35,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const TL_East = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/navigation-images/TL_East.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to West_3R_Out"); // Debugging log
                        navigation.navigate('West_3R_Out');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }, {rotateY: '60deg'}],
                    top: height * 0.35,
                    left: width * -.15,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TR_North"); // Debugging log
                        navigation.navigate('TR_North');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '90deg' }, { rotateY: '60deg'}],
                    top: height * -.08,
                    left: width * -.20,
                    width: width * 0.05,
                    height: height * 0.03,
                }]}>
                </Image>
                
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                        console.log("Navigating to TL_TR_1"); // Debugging log
                        navigation.navigate('TL_TR_1');
            }}>
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, { rotateX: '30deg'}],
                    top: height * -.05,
                    left: width * -.20,
                    width: width * 0.05,
                    height: height * 0.02,
                }]}>
                </Image>
                </TouchableOpacity>
        </ImageBackground>
    )
}

const TL_TR_1 = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/navigation-images/TL_TR_1.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TR_North"); // Debugging log
                        navigation.navigate('TR_North');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '180deg' }, { rotateX: '60deg'}],
                    top: height * 0.35,
                    left: width * .2,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeONine"); // Debugging log
                        navigation.navigate('ThreeONine');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, {rotateX: '60deg'}],
                    top: height * .1,
                    left: width * -.4,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '90deg' }, {rotateY: '60deg'}],
                    top: height * -0.03,
                    left: width * 0,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TL_East"); // Debugging log
                        navigation.navigate('TL_East');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, { rotateX: '40deg'}],
                    top: height * 0.35,
                    left: width * -.4,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity>
                <Button style={styles.leaderboardButton} 
                 onPress={() => {
                    console.log("Navigating to Leaderboard"); // Debugging log
                    navigation.navigate('Leaderboard');
        }}
                title='Psst, click here to win'></Button>
            </TouchableOpacity>
                
        </ImageBackground>
    )
}

const TR_North = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/navigation-images/TR_North.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity>
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '180deg' }, { rotateX: '60deg'}],
                    top: height * .06,
                    left: width * .2,
                    width: width * 0.1,
                    height: height * 0.05,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ComputerGame"); // Debugging log
                        navigation.navigate('ComputerGame');
            }}>
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '90deg' }, { rotateY: '60deg'}],
                    top: height * .06,
                    left: width * 0,
                    width: width * 0.1,
                    height: height * 0.05,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeONine"); // Debugging log
                        navigation.navigate('ThreeONine');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, {rotateX: '60deg'}],
                    top: height * .07,
                    left: width * -.35,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TL_TR_1"); // Debugging log
                        navigation.navigate('TL_TR_1');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, { rotateX: '60deg'}],
                    top: height * .15,
                    left: width * -.4,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to DougBathroom"); // Debugging log
                        navigation.navigate('DougBathroom');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }, { rotateY: '60deg'}],
                    top: height * .35,
                    left: width * -.1,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                
        </ImageBackground>
    )
}

const ThreeBathroom = ({navigation}) => {
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
        <ImageBackground
            source = {require('./assets/Three_Bathroom.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeBack"); // Debugging log
                        navigation.navigate('TR_North');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={playSound}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[{
                    transform: [{ rotate: '0deg' }],
                    top: height * .4,
                    left: width * -.35,
                    width: width * .5,
                    height: height * .2,
                    borderRadius: 30,
                    opacity: 0
                }]}>
                </Image>
                
                </TouchableOpacity>
                
        </ImageBackground>
    )
}

const ThreeONine = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/Three_O_Nine.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TR_North"); // Debugging log
                        navigation.navigate('TR_North');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TVPuzzle"); // Debugging log
                        navigation.navigate('TVPuzzle');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '10deg' }, {rotateX: '60deg'}, {rotateY: '0deg'}],
                    top: height * .02,
                    left: width * .2,
                    width: width * .05,
                    height: height * .02,

                }]}>
                </Image>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to John Puzzle"); // Debugging log
                        navigation.navigate('PuzzleJohn');
            }}>
                
                <Image
                source = {require('./assets/john_ghost.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, {rotateX: '0deg'}, {rotateY: '0deg'}],
                    top: height * -.10,
                    left: width * .31,
                    width: width * 0.25,
                    height: height * 0.25,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const ThreeTen = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/Three_Ten.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to TR_North"); // Debugging log
                        navigation.navigate('TR_North');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const ThreeONinePuzzle = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/309_TV_Puzzle.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeONine"); // Debugging log
                        navigation.navigate('ThreeONine');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                <Text>PUZZLE HERE</Text>
                </TouchableOpacity>
        </ImageBackground>
    )
}

const LeaderboardScreen = ({navigation}) => {


    // start leaderboard as null, we want to try to get it from storage first
    const [leaderboardData, setLeaderboardData] = useState(null);
    const { pauseTimer, elapsedTime, resetTimer } = useTimer();
    
    const [submitted, setSubmitted] = useState(false);
    
    useEffect(() => {
        // pause timer to calculate score as soon as you load into the leaderboard
        pauseTimer();
        const fetchLeaderboard = async () => {
          const leaderboard = await loadLeaderboard();
          if (leaderboard) {
            setLeaderboardData(leaderboard); // Set leaderboard if it exists
          } else {
            setLeaderboardData(dummyLeaderboardData); // Default to dummy data
            console.log("Couldn't load leaderboard for some reason :(")
          }
        };
    
        fetchLeaderboard(); // Call the function
      }, []); // Empty dependency array, we only want to load from memory when first opening the screen
    
    
    const updateLeaderboard = (name, score) => {
        var newDs = [];
        newDs = leaderboardData.slice();
        // try to find a duplicate score if it exists, if there is none, only then send the new score
        if (submitted === false){
            newDs.push({ name: name, score: score });
            Alert.alert("Score submitted!")
            setSubmitted(true);
        }
        // if a dupe is found, alert the user
        else {
            Alert.alert("Your score is already submitted.")
        }
        setLeaderboardData(newDs);
        saveLeaderboard(JSON.stringify(newDs));
      };
        const [name, setName] = useState(''); // State variable to store the name entered by the user
    
        const [score, setScore] = useState(0);
    
        // Generate score, default is 5,000,000 and we subtract the number of secs it took to get to the results
        const generateScore = () => {
          return 5000000 - elapsedTime;
        };
      
        // Generate the score whenever the screen is accessed
        useEffect(() => {
          setScore(generateScore());
          resetTimer(); // reset the timer so if the user tries to start over, their timer will be refreshed too
        }, []);
        return (
            <View style={styles.container}>
                <Text style={{color: 'white', fontSize: 30, marginBottom: 20, padding:30}}>Leaderboard</Text>
                <Leaderboard 
            data={leaderboardData} 
            sortBy='score' 
            labelBy='name'
            // this leaderboard component is usually white w/ black text, customize it to black w/ white text
            rankStyle={{color: "white"}} 
            labelStyle={{color: "white"}}
            scoreStyle={{color: "white"}}
            evenRowColor="#0f0e0e"
            oddRowColor="#1f1d1d"
            ></Leaderboard>
          <Text style={styles.scoreText}>Your score: {score}</Text>
    
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor={'white'}
            onChangeText={(text) => setName(text)}
          />
    
          <Button
            title="Submit"
            color="#c23127"
            onPress={() => updateLeaderboard(name, score)}
          />

         <Button
            title="Back to Menu"
            color="#c23127"
            onPress={() => navigation.navigate('HomeScreen')}
          />
                </View>
                
        )
    }

const App = () => {
    return(
        <TimerProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen" // This defines the first screen to load
                screenOptions={{ headerShown: false }} // Hide headers for all screens
      >
	    <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="InstructionsScreen" component={InstructionsScreen} />
            <Stack.Screen name="Elevator" component = {Elevator}></Stack.Screen>
            <Stack.Screen name="West_3R_Out" component = {West_3R_Out}></Stack.Screen>
            <Stack.Screen name="TL_TR_1" component = {TL_TR_1}></Stack.Screen>
            <Stack.Screen name="TL_East" component = {TL_East}></Stack.Screen>
            <Stack.Screen name="TR_North" component = {TR_North}></Stack.Screen>
            <Stack.Screen name="ThreeBathroom" component = {ThreeBathroom}></Stack.Screen>
            <Stack.Screen name="ThreeONine" component = {ThreeONine}></Stack.Screen>
            <Stack.Screen name="ThreeONinePuzzle" component = {ThreeONinePuzzle}></Stack.Screen>
            <Stack.Screen name="ThreeTen" component = {ThreeTen}></Stack.Screen>
            <Stack.Screen name="PuzzleJohn" component = {PuzzleJohn}></Stack.Screen>
            <Stack.Screen name="TVPuzzle" component = {TVPuzzle}></Stack.Screen>
            <Stack.Screen name="ComputerGame" component = {ComputerGame}></Stack.Screen>
            <Stack.Screen name="DougBathroom" component = {DougBathroom}></Stack.Screen>
            <Stack.Screen name="Leaderboard" component = {LeaderboardScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        </TimerProvider>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#000000'},
    
    background: {
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#000000'
      },
    button_3r: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#17FA0A',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.205,
        opacity: .5,

        // Shadow properties
        shadowColor: '#17FA0A',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_4: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#e9171c',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.425,
        opacity: .5,

        // Shadow properties
        shadowColor: '#e9171c',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_5: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#e9171c',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.65,
        opacity: .5,

        // Shadow properties
        shadowColor: '#e9171c',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: width * 0.09,
        height: height * 0.04,
        position: 'absolute'
    },
    leaderboardButton: {
        // I don't think this actually does anything but I'm leaving it here just in case
        position: 'absolute', 
        top: 0, 
        left: 0, 
        margin: 10, 
        backgroundColor: 'lightgray', 
        padding: 10, 
        },
        scoreText: {
            color: 'white',
            fontSize: 20,
            marginBottom: 20, 
            marginTop: 20
          },
          input: {
            height: 50, 
            backgroundColor: '#1c1a1a',
            textShadowColor: 'white',
            color: 'white',
            padding: 10,
            marginBottom: 20, 
            width: '50%', 
            borderRadius: 8, 
          },
    })
    

    export default App;
